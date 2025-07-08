import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AutoMap } from '@automapper/classes';
import { InterventionEntity } from './intervention.entity';
import { InterventionSectionEntity } from './intervention-section.entity';
import { VilleEntity } from '../../villes/entity/ville.entity';

@Entity('interventionTypes')
export class InterventionTypeEntity {
  @PrimaryGeneratedColumn()
  @AutoMap()
  id: number;

  @Column({ name: 'nom', length: 250 })
  @AutoMap()
  nom: string;

  @Column({ name: 'visible', nullable: false, default: true })
  @AutoMap()
  visible: boolean;

  @OneToMany(
    () => InterventionEntity,
    (intervention) => intervention.interventionType,
    { cascade: true },
  )
  interventions: InterventionEntity[];

  @OneToMany(
    () => InterventionSectionEntity,
    (section) => section.interventionType,
    { eager: true, cascade: true },
  )
  @AutoMap(() => InterventionSectionEntity)
  sections: InterventionSectionEntity[];

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
