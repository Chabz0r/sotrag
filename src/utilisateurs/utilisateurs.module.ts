import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {UtilisateursController} from './utilisateurs.controller';
import {UtilisateurEntity} from "./entity/utilisateur.entity";
import {ConfigModule} from "@nestjs/config";
import {SessionModule} from "../session/session.module";
import {UtilisateurProfile} from "./utilisateur.profile";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forFeature([UtilisateurEntity]),
    SessionModule,
  ],
  providers: [
    UtilisateurProfile,
  ],
  controllers: [UtilisateursController],
})

export class UtilisateursModule {
}
