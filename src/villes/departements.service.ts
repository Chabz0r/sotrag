import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {DepartementEntity} from "./entity/departement.entity";

@Injectable()
export class DepartementsService {
  constructor(@InjectRepository(DepartementEntity) private departementsRepository: Repository<DepartementEntity>) {}

  getAll() {
    return this.departementsRepository.find({ relations: ['villes'] });
  }
}
