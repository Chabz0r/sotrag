import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InterventionEntity } from './entity/intervention.entity';
import { FileEntity } from '../storage/entity/file.entity';

@Injectable()
export class InterventionsService {
  constructor(
    @InjectRepository(InterventionEntity)
    private interventionsRepository: Repository<InterventionEntity>,
    @InjectRepository(FileEntity)
    private filesRepository: Repository<FileEntity>,
  ) {}

  getAll(): Promise<InterventionEntity[]> {
    return this.interventionsRepository.find({
      relations: [
        'site',
        'interventionType',
        'interventionType.sections',
        'interventionType.sections.blocks',
        'utilisateur',
        'reportEntries',
        'files',
      ],
    });
  }

  async get(interventionId: number): Promise<InterventionEntity> {
    const intervention = await this.interventionsRepository.findOne({
      where: { id: interventionId },
      relations: [
        'site',
        'interventionType',
        'interventionType.sections',
        'interventionType.sections.blocks',
        'utilisateur',
        'reportEntries',
        'files',
      ],
    });
    if (!intervention) {
      throw new BadRequestException('Intervention not found');
    }

    return intervention;
  }

  async create(
    utilisateurId: number,
    interventionDto: InterventionEntity,
  ): Promise<InterventionEntity> {
    this.interventionsRepository.create({
      ...interventionDto,
      utilisateurId: utilisateurId,
    });

    return await this.interventionsRepository.save({
      ...interventionDto,
      utilisateurId: utilisateurId,
    });
  }

  async update(
    interventionId: number,
    interventionDto: InterventionEntity,
  ): Promise<InterventionEntity> {
    const intervention = await this.get(interventionId);

    interventionDto.id = interventionId;
    interventionDto.updatedAt = new Date();

    const fileIdsToDelete = intervention.files
      .filter((file) => !interventionDto.files.some((f) => f.id === file.id))
      .map((file) => file.id);
    for (const fileId of fileIdsToDelete) {
      await this.filesRepository.delete({ id: fileId });
    }

    return await this.interventionsRepository.save(interventionDto);
  }

  async delete(interventionId: number): Promise<void> {
    await this.interventionsRepository.delete(interventionId);
  }
}
