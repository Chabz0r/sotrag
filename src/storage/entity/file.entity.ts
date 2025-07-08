import {BeforeInsert, BeforeUpdate, Column, Entity, JoinColumn, ManyToOne, PrimaryColumn} from 'typeorm';
import {AutoMap} from "@automapper/classes";
import {InterventionEntity} from "../../interventions/entity/intervention.entity";

@Entity('files')
export class FileEntity {

  @PrimaryColumn()
  @AutoMap()
  id: string;

  @Column({type: "int", nullable: false})
  @AutoMap()
  interventionId: number;

  @ManyToOne(() => InterventionEntity, (intervention) => intervention.files)
  @JoinColumn({name: 'interventionId'})
  @AutoMap(() => InterventionEntity)
  intervention: InterventionEntity;

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
