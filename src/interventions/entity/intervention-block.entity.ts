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
import {InterventionQuestionEntity} from "./intervention-question.entity";
import {InterventionSectionEntity} from "./intervention-section.entity";

@Entity('interventionBlocks')
export class InterventionBlockEntity {
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

  @Column({name: 'sectionId', nullable: false})
  @AutoMap()
  sectionId: number;

  @ManyToOne(() => InterventionSectionEntity, (section) => section.blocks)
  @JoinColumn({name: 'sectionId'})
  section: InterventionSectionEntity;

  @AutoMap(() => InterventionQuestionEntity)
  @OneToMany(() => InterventionQuestionEntity, (question) => question.block, {eager: true, cascade: true})
  questions: InterventionQuestionEntity[];

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
