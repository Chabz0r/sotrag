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
import {DepartementEntity} from "../../villes/entity/departement.entity";
import {AutoMap} from "@automapper/classes";
import {InterventionEntity} from "../../interventions/entity/intervention.entity";

export enum Role {
  Technicien = 0,
  Administrateur = 1,
  SuperAdministrateur = 2,
}

@Entity('utilisateurs')
export class UtilisateurEntity {

  @PrimaryGeneratedColumn()
  @AutoMap()
  id: number;

  @Column({length: 250, nullable: false})
  password: string;

  @Column({length: 250, nullable: true, default: null})
  sessionToken: string;

  @Column({length: 20, nullable: false})
  @AutoMap()
  code: string;

  @Column({length: 100, nullable: false})
  @AutoMap()
  nom: string;

  @Column({length: 100, nullable: false})
  @AutoMap()
  prenom: string;

  @Column({length: 26, nullable: false})
  @AutoMap()
  tel: string;

  @Column({length: 250, nullable: false})
  @AutoMap()
  mail: string;

  @Column({type: "int", nullable: false})
  @AutoMap()
  departementId: number;

  @ManyToOne(() => DepartementEntity, (departement) => departement.utilisateurs, {eager: true})
  @JoinColumn({name: 'departementId'})
  @AutoMap(() => DepartementEntity)
  departement: DepartementEntity;

  @OneToMany(() => InterventionEntity, (intervention) => intervention.utilisateurId, {cascade: true})
  interventions: InterventionEntity[];

  @Column({name: 'role'})
  @AutoMap()
  @AutoMap(() => String)
  @Column({
    type: 'int',
    enum: Role,
    nullable: false,
    default: Role.Technicien,
  })
  role: Role;

  @Column({type: "datetime", nullable: false, default: () => "now()"})
  @AutoMap()
  createdAt: Date;

  @Column({type: "datetime", nullable: false, default: () => "now()"})
  @AutoMap()
  updatedAt: Date;

  get fullName(): string {
    return `${this.nom} ${this.prenom}`;
  }

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
