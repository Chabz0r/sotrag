import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AutoMap } from '@automapper/classes';
import { UtilisateurEntity } from '../../utilisateurs/entity/utilisateur.entity';
import { ReportEntryEntity } from './report-entry.entity';
import { SiteEntity } from '../../clients/entity/site.entity';
import { InterventionTypeEntity } from './intervention-type.entity';
import { FileEntity } from '../../storage/entity/file.entity';

export enum InterventionStatus {
  PENDING = 0,
  VALIDATED = 1,
}

@Entity('interventions')
export class InterventionEntity {
  @PrimaryGeneratedColumn()
  @AutoMap()
  id: number;

  @Column({ type: 'int', nullable: false })
  @AutoMap()
  siteId: number;

  @ManyToOne(() => SiteEntity, (site) => site.interventions)
  @JoinColumn({ name: 'siteId' })
  @AutoMap(() => SiteEntity)
  site: SiteEntity;

  @Column({ type: 'int', nullable: false })
  @AutoMap()
  interventionTypeId: number;

  @ManyToOne(() => InterventionTypeEntity, (type) => type.interventions)
  @JoinColumn({ name: 'interventionTypeId' })
  @AutoMap(() => InterventionTypeEntity)
  interventionType: InterventionTypeEntity;

  @Column({ type: 'int', nullable: false })
  @AutoMap()
  utilisateurId: number;

  @ManyToOne(
    () => UtilisateurEntity,
    (utilisateur) => utilisateur.interventions,
    { eager: true },
  )
  @JoinColumn({ name: 'utilisateurId' })
  @AutoMap(() => UtilisateurEntity)
  utilisateur: UtilisateurEntity;

  @Column({ type: 'datetime', nullable: false })
  @AutoMap()
  passedAt: Date;

  @Column({ type: 'datetime', nullable: false })
  @AutoMap()
  leavingTimeAt: Date;

  @AutoMap()
  @OneToMany(() => ReportEntryEntity, (entry) => entry.intervention, {
    cascade: true,
  })
  reportEntries: ReportEntryEntity[];

  @AutoMap()
  @OneToMany(() => FileEntity, (file) => file.intervention, { cascade: true })
  files: FileEntity[];

  @Column({ name: 'status', nullable: false })
  @AutoMap()
  @AutoMap(() => Number)
  @Column({
    type: 'int',
    enum: InterventionStatus,
    nullable: false,
    default: InterventionStatus.PENDING,
  })
  status: InterventionStatus;

  @Column({ type: 'longtext', nullable: true })
  @AutoMap()
  signature: string | null;

  @Column({ type: 'longtext', nullable: true })
  @AutoMap()
  signatureTech: string | null;

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
