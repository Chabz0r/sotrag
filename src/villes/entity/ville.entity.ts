import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm';
import {DepartementEntity} from "./departement.entity";
import {AutoMap} from "@automapper/classes";
import {SiteEntity} from "../../clients/entity/site.entity";

@Entity('villes')
export class VilleEntity {

  @AutoMap()
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "int", nullable: false })
  @AutoMap()
  departementId: number;

  @AutoMap(() => DepartementEntity)
  @ManyToOne(() => DepartementEntity, (departement) => departement.villes)
  @JoinColumn({ name: 'departementId' })
  departement: DepartementEntity;

  @AutoMap()
  @Column({ name: 'nom', length: 150, nullable: false })
  nom: string;

  @AutoMap()
  @Column({ name: 'codePostal', length: 10, nullable: false })
  codePostal: string;

  @AutoMap()
  @CreateDateColumn({ nullable: false, default: () => "now()" })
  createdAt:  Date;

  @AutoMap()
  @CreateDateColumn({ nullable: false, default: () => "now()" })
  updatedAt:  Date;

  @OneToMany(() => SiteEntity, (site) => site.ville, {cascade: true})
  sites: SiteEntity[];

  @BeforeInsert()
  updateDates () {
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  @BeforeUpdate()
  updateModifiedDate () {
    this.updatedAt = new Date();
  }
}
