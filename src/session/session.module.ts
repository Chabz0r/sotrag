import {Module} from '@nestjs/common';
import {JwtModule} from '@nestjs/jwt';
import * as process from "process";
import {AuthService} from './auth.service';
import {UtilisateursService} from "./utilisateurs.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UtilisateurEntity} from "../utilisateurs/entity/utilisateur.entity";
import {ConfigModule} from "@nestjs/config";
import {JwtAuthGuard} from "./guard/jwt-auth.guard";
import {environments} from "../environments/environments";
import {MailService} from "./mail.service";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    JwtModule.register({
      global: true,
      secret: environments.jwt.secret,
      signOptions: { expiresIn: '10h' },
    }),
    TypeOrmModule.forFeature([UtilisateurEntity]),
  ],
  providers: [
    AuthService,
    MailService,
    UtilisateursService,
    JwtAuthGuard,
  ],
  controllers: [],
  exports: [AuthService, JwtAuthGuard, UtilisateursService],
})
export class SessionModule {
}
