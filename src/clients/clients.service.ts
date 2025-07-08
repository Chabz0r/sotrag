import {BadRequestException, Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {ClientEntity} from "./entity/client.entity";
import {ClientCreateDto} from "./dto/client.create.dto";
import {ClientUpdateDto} from "./dto/client.update.dto";
import {DepartementEntity} from "../villes/entity/departement.entity";

@Injectable()
export class ClientsService {
  constructor(@InjectRepository(ClientEntity) private clientsRepository: Repository<ClientEntity>) {}

  getAll(): Promise<ClientEntity[]> {
    return this.clientsRepository.find();
  }

  async get(clientId: number): Promise<ClientEntity> {
    const client = await this.clientsRepository.findOneBy({
      id: clientId,
    });
    if (!client) {
      throw new BadRequestException('Client not found');
    }

    return client;
  }

  async create(clientDto: ClientCreateDto): Promise<ClientEntity> {

    const client = this.clientsRepository.create(clientDto);

    return await this.clientsRepository.save(client);
  }

  async update(clientId: number, clientDto: ClientUpdateDto): Promise<ClientEntity> {
    await this.clientsRepository.update({id: clientId}, clientDto);

    return await this.get(clientId);
  }

  async delete(clientId: number): Promise<void> {
    await this.clientsRepository.delete(clientId);
  }
}
