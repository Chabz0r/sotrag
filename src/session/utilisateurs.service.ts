import {BadRequestException, Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {UtilisateurEntity} from "../utilisateurs/entity/utilisateur.entity";
import * as bcrypt from "bcrypt";
import {MailService} from "./mail.service";
import {generate} from "generate-password";

@Injectable()
export class UtilisateursService {
  constructor(
    @InjectRepository(UtilisateurEntity) private utilisateursRepository: Repository<UtilisateurEntity>,
    private readonly mailService: MailService
  ) {}

  async findOne(utilisateurname: string): Promise<UtilisateurEntity | undefined> {
    return this.utilisateursRepository.findOneBy({
      code: utilisateurname,
    });
  }

  async getAll(): Promise<UtilisateurEntity[]> {
    return this.utilisateursRepository.find();
  }

  async get(utilisateurId: number): Promise<UtilisateurEntity> {
    const utilisateur = await this.utilisateursRepository.findOneBy({
      id: utilisateurId,
    });
    if (!utilisateur) {
      throw new BadRequestException('Utilisateur not found');
    }

    return utilisateur;
  }

  async create(utilisateurDto: UtilisateurEntity) {

    const utilisateur = this.utilisateursRepository.create(utilisateurDto);

    utilisateur.password = await bcrypt.hash('123456', 10);
    utilisateur.sessionToken = '';

    return await this.utilisateursRepository.insert(utilisateur);
  }

  async update(utilisateurId: number, utilisateurDto: UtilisateurEntity) {

    await this.utilisateursRepository.update({id: utilisateurId}, utilisateurDto);

    return await this.get(utilisateurId);
  }

  async resetPassword(utilisateurId: number): Promise<void> {
    const password = generate({
      length: 10,
      numbers: true
    });
    console.log('password', password)

    const updated = await this.utilisateursRepository.update({id: utilisateurId}, {password: await bcrypt.hash(password, 10) });
    if (!updated) {
      throw new BadRequestException('Utilisateur not found');
    }

    const utilisateur = await this.get(utilisateurId);

    this.mailService.sentNewPassword(utilisateur.mail, password)
  }

  async delete(utilisateurId: number): Promise<void> {
    await this.utilisateursRepository.delete(utilisateurId);
  }
}
