import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { VilleEntity } from '../../villes/entity/ville.entity';
import { DepartementEntity } from '../../villes/entity/departement.entity';
import { AutoMap } from '@automapper/classes';
import { ClientEntity } from './client.entity';
import { InterventionEntity } from '../../interventions/entity/intervention.entity';

@Entity('sites')
export class SiteEntity {
  @PrimaryGeneratedColumn()
  @AutoMap()
  id: number;

  @Column({ type: 'int', nullable: false })
  @AutoMap()
  clientId: number;

  @ManyToOne(() => ClientEntity, (client) => client.sites, { eager: true })
  @JoinColumn({ name: 'clientId' })
  @AutoMap(() => ClientEntity)
  client: ClientEntity;

  @Column({ name: 'nom', length: 150, nullable: false })
  @AutoMap()
  nom: string;

  @Column({ name: 'affaire', length: 15, nullable: false })
  @AutoMap()
  affaire: string;

  @Column({ name: 'contactNom', length: 150, nullable: false })
  @AutoMap()
  contactNom: string;

  @Column({ name: 'contactPrenom', length: 150, nullable: true })
  @AutoMap()
  contactPrenom: string;

  @Column({ name: 'contactTel', length: 26, nullable: false })
  @AutoMap()
  contactTel: string;

  @Column({ name: 'contactMail', length: 26, nullable: true })
  @AutoMap()
  contactMail: string;

  @Column({ name: 'latitude', type: 'int', nullable: true })
  @AutoMap()
  latitude: number;

  @Column({ name: 'longitude', type: 'int', nullable: true })
  @AutoMap()
  longitude: number;

  @Column({ name: 'adresse', length: 500, nullable: false })
  @AutoMap()
  adresse: string;

  @Column({ name: 'codePostal', length: 10, nullable: false })
  @AutoMap()
  codePostal: string;

  @Column({ type: 'int', nullable: false })
  @AutoMap()
  villeId: number;

  @ManyToOne(() => VilleEntity, (ville) => ville.sites, { eager: true })
  @JoinColumn({ name: 'villeId' })
  @AutoMap(() => VilleEntity)
  ville: VilleEntity;

  @Column({ type: 'int', nullable: false })
  @AutoMap()
  departementId: number;

  @ManyToOne(() => DepartementEntity, (departement) => departement.sites, {
    eager: true,
  })
  @JoinColumn({ name: 'departementId' })
  @AutoMap(() => DepartementEntity)
  departement: DepartementEntity;

  @OneToMany(() => InterventionEntity, (intervention) => intervention.siteId, {
    cascade: true,
  })
  interventions: InterventionEntity[];

  @Column({ type: 'datetime', nullable: false, default: () => 'now()' })
  @AutoMap()
  createdAt: Date;

  @Column({ type: 'datetime', nullable: false, default: () => 'now()' })
  @AutoMap()
  updatedAt: Date;

  @BeforeInsert()
  updateDates() {
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  @BeforeUpdate()
  updateModifiedDate() {
    this.updatedAt = new Date();
  }
}
