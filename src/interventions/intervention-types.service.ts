import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InterventionTypeEntity } from './entity/intervention-type.entity';

@Injectable()
export class InterventionTypesService {
  constructor(
    @InjectRepository(InterventionTypeEntity)
    private interventionTypesRepository: Repository<InterventionTypeEntity>,
  ) {}

  getAll(): Promise<InterventionTypeEntity[]> {
    return this.interventionTypesRepository.find({
      relations: ['sections'],
      where: {
        visible: true,
      },
    });
  }

  async get(interventionTypeId: number): Promise<InterventionTypeEntity> {
    const interventionType = await this.interventionTypesRepository.findOneBy({
      id: interventionTypeId,
    });
    if (!interventionType) {
      throw new BadRequestException('Intervention Type not found');
    }

    return interventionType;
  }
}
