import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import {UtilisateursModule} from './utilisateurs/utilisateurs.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ConfigModule} from '@nestjs/config';
import {AuthModule} from './auth/auth.module';
import {LoggerMiddleware} from "./middleware/logger.middleware";
import {APP_GUARD} from "@nestjs/core";
import {JwtAuthGuard} from "./session/guard/jwt-auth.guard";
import {SessionModule} from "./session/session.module";
import {VillesModule} from "./villes/villes.module";
import {ClientsModule} from "./clients/clients.module";
import {AutomapperModule} from "@automapper/nestjs";
import {classes} from "@automapper/classes";
import {ormConfig} from "../ormconfig";
import {InterventionsModule} from "./interventions/interventions.module";
import {MailerModule} from "@nestjs-modules/mailer";
import {environments} from "./environments/environments";
import {StoragesModule} from "./storage/storages.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(ormConfig), //default
    AutomapperModule.forRoot({
      strategyInitializer: classes(),
    }),
    MailerModule.forRoot({
      transport: {
        host: environments.email.host,
        port: parseInt(environments.email.port),
        auth: {
          user: environments.email.auth.user,
          pass: environments.email.auth.pass,
        },
      },
    }),
    UtilisateursModule,
    AuthModule,
    SessionModule,
    VillesModule,
    ClientsModule,
    InterventionsModule,
    StoragesModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
