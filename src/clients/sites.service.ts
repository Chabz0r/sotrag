import {BadRequestException, Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {SiteEntity} from "./entity/site.entity";
import {SiteCreateDto} from "./dto/site.create.dto";
import {DepartementEntity} from "../villes/entity/departement.entity";
import {VilleEntity} from "../villes/entity/ville.entity";

@Injectable()
export class SitesService {
  constructor(
    @InjectRepository(SiteEntity) private sitesRepository: Repository<SiteEntity>
  ) {
  }

  getAll(): Promise<SiteEntity[]> {
    return this.sitesRepository.find();
  }

  async get(siteId: number): Promise<SiteEntity> {
    const site = await this.sitesRepository.findOneBy({
      id: siteId,
    });
    if (!site) {
      throw new BadRequestException('Site not found');
    }

    return site;
  }

  async create(siteDto: SiteCreateDto): Promise<SiteEntity> {

    const site = this.sitesRepository.create(siteDto);

    return await this.sitesRepository.save(site);
  }

  async update(siteId: number, siteDto: SiteCreateDto): Promise<SiteEntity> {

    await this.sitesRepository.update({id: siteId}, siteDto);

    return await this.get(siteId);
  }

  async delete(siteId: number): Promise<void> {
    await this.sitesRepository.delete(siteId);
  }
}
