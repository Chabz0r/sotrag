import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { InterventionProfile } from './intervention.profile';
import { InterventionsController } from './interventions.controller';
import { InterventionsService } from './interventions.service';
import { InterventionEntity } from './entity/intervention.entity';
import { ReportEntryEntity } from './entity/report-entry.entity';
import { InterventionTypeEntity } from './entity/intervention-type.entity';
import { InterventionTypesController } from './intervention-types.controller';
import { InterventionTypesService } from './intervention-types.service';
import { StoragesService } from '../storage/storages.service';
import { FileEntity } from '../storage/entity/file.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forFeature([
      InterventionTypeEntity,
      InterventionEntity,
      ReportEntryEntity,
      FileEntity,
    ]),
  ],
  providers: [
    StoragesService,
    InterventionProfile,
    InterventionsService,
    InterventionTypesService,
  ],
  controllers: [InterventionsController, InterventionTypesController],
})
export class InterventionsModule {}
