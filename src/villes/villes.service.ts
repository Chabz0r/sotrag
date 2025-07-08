import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {VilleEntity} from "./entity/ville.entity";

@Injectable()
export class VillesService {
  constructor(@InjectRepository(VilleEntity) private villesRepository: Repository<VilleEntity>) {
  }

  async getAll(): Promise<VilleEntity[]> {
    return this.villesRepository.find({ relations: ['departement'] });
  }
}
