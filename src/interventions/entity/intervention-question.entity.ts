import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AutoMap } from '@automapper/classes';
import { InterventionBlockEntity } from './intervention-block.entity';

export enum QuestionType {
  text = 'text',
  number = 'number',
  textarea = 'textarea',
  yesno = 'yesno',
  date = 'date',
  time = 'time',
}

@Entity('interventionQuestions')
export class InterventionQuestionEntity {
  @PrimaryGeneratedColumn()
  @AutoMap()
  id: number;

  @Column({ name: 'position', nullable: false })
  @AutoMap()
  position: number;

  @Column({ name: 'key', length: 150, nullable: false })
  @AutoMap()
  key: string;

  @Column({ name: 'label', length: 200, nullable: false })
  @AutoMap()
  label: string;

  @Column({ name: 'type', length: 10, nullable: false })
  @AutoMap()
  @AutoMap(() => String)
  @Column({
    type: 'varchar',
    length: 10,
    enum: QuestionType,
    nullable: false,
    default: QuestionType.text,
  })
  type: QuestionType;

  @Column({ name: 'unite', length: 50, nullable: false })
  @AutoMap()
  unite: string;

  @Column({ name: 'blockId', nullable: false })
  @AutoMap()
  blockId: number;

  @ManyToOne(() => InterventionBlockEntity, (block) => block.section)
  @JoinColumn({ name: 'blockId' })
  @AutoMap(() => InterventionBlockEntity)
  block: InterventionBlockEntity;

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
