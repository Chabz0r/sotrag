import {Module} from '@nestjs/common';
import {UtilisateursModule} from '../utilisateurs/utilisateurs.module';
import {JwtModule} from '@nestjs/jwt';
import {AuthController} from './auth.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UtilisateurEntity} from "../utilisateurs/entity/utilisateur.entity";
import {ConfigModule} from "@nestjs/config";
import {SessionModule} from "../session/session.module";
import {environments} from '../environments/environments';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forFeature([UtilisateurEntity]),
    JwtModule.register({
      global: true,
      secret: environments.jwt.secret,
      signOptions: { expiresIn: '10h' },
    }),
    SessionModule,
    UtilisateursModule,
  ],
  providers: [],
  controllers: [AuthController],
  exports: [],
})
export class AuthModule {}
