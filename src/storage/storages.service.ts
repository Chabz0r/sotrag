import {Injectable, InternalServerErrorException} from '@nestjs/common';
import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
  GetObjectCommand,
} from '@aws-sdk/client-s3';
import {environments} from "../environments/environments";
import {getSignedUrl} from "@aws-sdk/s3-request-presigner";
import {v4 as uuidv4} from 'uuid';
import {FileDto} from "./dto/file.dto";

@Injectable()
export class StoragesService {

  private client: S3Client;
  private bucketName = environments.bucket.name;
  private bucketRegion = environments.bucket.region;

  constructor() {
    if (!this.bucketRegion) {
      throw new Error('bucketRegion not found in environment variables');
    }
    if (!this.bucketName) {
      throw new Error('bucketName not found in environment variables');
    }

    this.client = new S3Client({
      region: this.bucketRegion,
      endpoint: environments.bucket.endpoint,
      credentials: {
        accessKeyId: environments.bucket.credentials.accessKeyId,
        secretAccessKey: environments.bucket.credentials.secretAccessKey,
      },
      forcePathStyle: true,
    });
  }

  async uploadSingleFile({
                           file,
                           isPublic = true,
                         }: {
    file: Express.Multer.File;
    isPublic: boolean;
  }) {
    try {
      const key = `${uuidv4()}`;
      const command = new PutObjectCommand({
        Bucket: this.bucketName,
        Key: key,
        Body: file.buffer,
        ContentType: file.mimetype,
        ACL: isPublic ? 'public-read' : 'private',

        Metadata: {
          originalName: file.originalname,
        },
      });

      const uploadResult = await this.client.send(command);

      return {
        url: isPublic
          ? (await this.getFileUrl(key)).url
          : (await this.getPresignedSignedUrl(key)).url,
        id: key,
        isPublic,
      } satisfies FileDto as FileDto;
    } catch (error) {
      console.log('error', error);
      throw new InternalServerErrorException(error);
    }
  }

  async getFileUrl(key: string) {
    return { url: `${environments.bucket.path}/${key}` };
  }

  async getPresignedSignedUrl(key: string) {
    try {
      const command = new GetObjectCommand({
        Bucket: this.bucketName,
        Key: key,
      });

      const url = await getSignedUrl(this.client, command, {
        expiresIn: 60 * 60 * 24, // 24 hours
      });

      return { url };
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async deleteFile(key: string) {
    try {
      const command = new DeleteObjectCommand({
        Bucket: this.bucketName,
        Key: key,
      });

      await this.client.send(command);

      return { message: 'File deleted successfully' };
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}

