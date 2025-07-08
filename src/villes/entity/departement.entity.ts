import {BeforeInsert, BeforeUpdate, Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {ClientEntity} from "../../clients/entity/client.entity";
import {UtilisateurEntity} from "../../utilisateurs/entity/utilisateur.entity";
import {VilleEntity} from "./ville.entity";
import {AutoMap} from "@automapper/classes";
import {SiteEntity} from "../../clients/entity/site.entity";

@Entity('departements')
export class DepartementEntity {

  @PrimaryGeneratedColumn()
  @AutoMap()
  id: number;

  @Column({ name: 'code', length: 10 })
  @AutoMap()
  code:string;

  @Column({ name: 'nom', length: 150, nullable: false })
  @AutoMap()
  nom:string;

  @OneToMany(() => VilleEntity, (ville) => ville.departement, {cascade: true})
  @AutoMap(() => VilleEntity)
  villes: VilleEntity[];

  @OneToMany(() => ClientEntity, (client) => client.departement, {cascade: true})
  clients: ClientEntity[];

  @OneToMany(() => UtilisateurEntity, (utilisateur) => utilisateur.departement, {cascade: true})
  utilisateurs: UtilisateurEntity[];

  @OneToMany(() => SiteEntity, (site) => site.departement, {cascade: true})
  sites: SiteEntity[];

  @Column({ type:"datetime", nullable: false, default: () => "now()" })
  @AutoMap()
  createdAt:  Date;

  @Column({ type:"datetime", nullable: false, default: () => "now()" })
  @AutoMap()
  updatedAt:  Date;

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
