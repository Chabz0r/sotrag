import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ClientsController} from './clients.controller';
import {ClientEntity} from "./entity/client.entity";
import {ConfigModule} from "@nestjs/config";
import {ClientsService} from "./clients.service";
import {ClientProfile} from "./client.profile";
import {SitesController} from "./sites.controller";
import {SitesService} from "./sites.service";
import {SiteEntity} from "./entity/site.entity";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forFeature([ClientEntity, SiteEntity]),
  ],
  providers: [
    ClientsService,
    SitesService,
    ClientProfile,
  ],
  controllers: [ClientsController, SitesController],
})

export class ClientsModule {
}
