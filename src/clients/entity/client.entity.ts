import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm';
import {AutoMap} from "@automapper/classes";
import {SiteEntity} from "./site.entity";
import {DepartementEntity} from "../../villes/entity/departement.entity";

@Entity('clients')
export class ClientEntity {

  @PrimaryGeneratedColumn()
  @AutoMap()
  id: number;

  @Column({name: 'nom', length: 150})
  @AutoMap()
  nom: string;

  @OneToMany(() => SiteEntity, (site) => site.clientId, {cascade: true})
  sites: SiteEntity[];

  @Column({ type: "int", nullable: false })
  @AutoMap()
  departementId: number;

  @ManyToOne(() => DepartementEntity, (departement) => departement.clients, {eager: true})
  @JoinColumn({name: 'departementId'})
  @AutoMap(() => DepartementEntity)
  departement: DepartementEntity;

  @Column({type: "datetime", nullable: false, default: () => "now()"})
  @AutoMap()
  createdAt: Date;

  @Column({type: "datetime", nullable: false, default: () => "now()"})
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
