import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {VillesController} from './villes.controller';
import {VilleEntity} from "./entity/ville.entity";
import {ConfigModule} from "@nestjs/config";
import {VillesService} from "./villes.service";
import {VilleProfile} from "./vile.profile";
import {DepartementsService} from "./departements.service";
import {DepartementsController} from "./departements.controller";
import {DepartementEntity} from "./entity/departement.entity";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forFeature([DepartementEntity, VilleEntity]),
  ],
  providers: [
    DepartementsService,
    VillesService,
    VilleProfile,
  ],
  controllers: [DepartementsController, VillesController],
})

export class VillesModule { }
