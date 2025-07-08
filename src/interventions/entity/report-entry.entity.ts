import {BeforeInsert, BeforeUpdate, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {AutoMap} from "@automapper/classes";
import {InterventionEntity} from "./intervention.entity";

@Entity('reportEntries')
export class ReportEntryEntity {

  @PrimaryGeneratedColumn()
  @AutoMap()
  id: number;

  @Column({ name: 'interventionId', nullable:false})
  @AutoMap()
  interventionId: number;

  @ManyToOne(() => InterventionEntity, (intervention) => intervention.reportEntries)
  @JoinColumn({ name: 'interventionId' })
  @AutoMap(() => InterventionEntity)
  intervention: InterventionEntity;

  @Column({ name: 'key', length: 150, nullable:false})
  @AutoMap()
  key: string;

  @Column({ name: 'value', length: 500, nullable:false})
  @AutoMap()
  value: string;

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
