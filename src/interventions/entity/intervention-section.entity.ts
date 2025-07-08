import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from "typeorm";
import {AutoMap} from "@automapper/classes";
import {InterventionTypeEntity} from "./intervention-type.entity";
import {InterventionBlockEntity} from "./intervention-block.entity";

@Entity('interventionSections')
export class InterventionSectionEntity {
  @PrimaryGeneratedColumn()
  @AutoMap()
  id: number;

  @Column({name: 'position', nullable: false})
  @AutoMap()
  position: number;

  @Column({name: 'label', length: 200, nullable: false})
  @AutoMap()
  label: string;

  @Column({type: "datetime", nullable: false, default: () => "now()"})
  @AutoMap()
  createdAt: Date;

  @Column({type: "datetime", nullable: false, default: () => "now()"})
  @AutoMap()
  updatedAt: Date;

  @Column({name: 'interventionTypeId', nullable: false})
  @AutoMap()
  interventionTypeId: number;

  @ManyToOne(() => InterventionTypeEntity, (intervention) => intervention.sections)
  @JoinColumn({name: 'interventionTypeId'})
  @AutoMap(() => InterventionTypeEntity)
  interventionType: InterventionTypeEntity;

  @AutoMap(() => InterventionBlockEntity)
  @OneToMany(() => InterventionBlockEntity, (block) => block.section, {eager: true, cascade: true})
  blocks: InterventionBlockEntity[];

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
