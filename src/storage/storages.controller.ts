import {
  Body,
  Controller,
  Delete,
  FileTypeValidator,
  Get,
  MaxFileSizeValidator,
  Param,
  ParseFilePipe,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import {FileInterceptor} from '@nestjs/platform-express';
import {ApiBearerAuth, ApiBody, ApiConsumes, ApiOkResponse, ApiTags, ApiUnauthorizedResponse} from "@nestjs/swagger";
import {StoragesService} from "./storages.service";
import {HasRoles} from "../session/decorators/has-roles.decorator";
import {Role} from "../utilisateurs/entity/utilisateur.entity";
import {FileDto} from "./dto/file.dto";

const MAX_FILE_SIZE = 1024 * 1024 * 10; // 10MB

@ApiTags('Storages')
@Controller('storages')
@ApiBearerAuth()
@Controller()
export class StoragesController {
  constructor(private readonly storagesService: StoragesService) {
  }

  // @ApiUnauthorizedResponse({description: 'Unauthorized'})
  @ApiOkResponse({description: "Upload a new file", type: FileDto})
  @Post('')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: { //     <----- matches the string in FileInterceptor('file')
          type: 'string',
          format: 'binary',
        },
        isPublic : {
          type: 'boolean',
        }
      },
    },
  })
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new FileTypeValidator({fileType: '.(png|jpeg|jpg)'}),
          new MaxFileSizeValidator({
            maxSize: MAX_FILE_SIZE, // 10MB
            message: 'File is too large. Max file size is 10MB',
          }),
        ],
        fileIsRequired: true,
      }),
    ) file: Express.Multer.File,
    @Body('isPublic') isPublic: string,
  ) {
    const isPublicBool = isPublic === 'true' ? true : false;
    return this.storagesService.uploadSingleFile({file, isPublic: isPublicBool});
  }

  @Get(':key')
  async getFileUrl(@Param('key') key: string) {
    return this.storagesService.getFileUrl(key);
  }

  @Get('/signed-url/:key')
  async getSingedUrl(@Param('key') key: string) {
    return this.storagesService.getPresignedSignedUrl(key);
  }

  @HasRoles(Role.Administrateur, Role.SuperAdministrateur)
  @ApiUnauthorizedResponse({description: 'Unauthorized'})
  @Delete(':key')
  async deleteFile(@Param('key') key: string) {
    return this.storagesService.deleteFile(key);
  }
}
