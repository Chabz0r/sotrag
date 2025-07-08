import {CanActivate, ExecutionContext, Injectable, Logger, UnauthorizedException,} from '@nestjs/common';
import {Reflector} from '@nestjs/core';
import {JwtService} from '@nestjs/jwt';
import {Client, getClient} from '../../shared/utils/get-client';
import {AuthService} from '../auth.service';
import {AUTH_NOT_REQUIRED} from '../decorators/auth-not-required.decorator';
import {UtilisateursService} from "../utilisateurs.service";
import {UtilisateurEntity, Role} from "../../utilisateurs/entity/utilisateur.entity";

//import { Socket } from 'socket.io';

export interface Token {
  sub: number;
  username: string;
  departementId: number;
  role: string;
}

@Injectable()
export class JwtAuthGuard implements CanActivate {
  private logger = new Logger(JwtAuthGuard.name);
  reflector: Reflector;

  constructor(
    private jwtService: JwtService,
    private utilisateurService: UtilisateursService,
    private authService: AuthService,
  ) {
    this.reflector = new Reflector();
  }

  async canActivate(ctx: ExecutionContext): Promise<boolean> {
    this.logger.log('canActivate');
    const client = this.getRequest(ctx);

    const allowAny = this.reflector.get<boolean>(
      AUTH_NOT_REQUIRED,
      ctx.getHandler(),
    );

    try {
      client.user = await this.handleRequest(ctx, client);
    } catch (e) {
      if (allowAny) {
        return true;
      }

      throw e;
    }

    return client.user != null && this.hasRoles(ctx, client.user);
  }

  private hasRoles(ctx: ExecutionContext, user: UtilisateurEntity | null) {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>('roles', [
      ctx.getHandler(),
      ctx.getClass(),
    ]);

    if (!requiredRoles) {
      return true;
    }

    return requiredRoles.some((role) => user?.role == role);
  }

  private async handleRequest(ctx: ExecutionContext, client: Client) {
    const token = this.getToken(ctx, client);

    const decoded = this.jwtService.decode(token) as Token;

    if (!decoded) {
      this.throwException(ctx, 'Unable to decode token');
    }

    try {
      const utilisateur = await this.validate(decoded);

      await this.jwtService.verifyAsync<Token>(
        token,
        this.authService.getAccessTokenOptions(utilisateur),
      );

      return utilisateur;
    } catch (e) {
      this.throwException(ctx, 'Invalid token');
    }
  }

  private validate({ sub }: Token) {
    return this.utilisateurService.get(sub);
  }

  private getToken(ctx: ExecutionContext, client: Client): string {
    const authorization = client.headers.authorization?.split(' ');

    if (!authorization) {
      this.throwException(ctx, 'Token not found');
    }

    if (authorization[0].toLowerCase() !== 'bearer') {
      this.throwException(ctx, 'Authorization type not valid');
    }

    if (!authorization[1]) {
      this.throwException(ctx, 'Token not provided');
    }

    return authorization[1];
  }

  throwException(ctx: ExecutionContext, message: string) {
//    if (ctx.getType() === 'ws') {
//      ctx
//        .switchToWs()
//        .getClient<Socket>()
//        .disconnect(true);
//    }

    this.logger.log(`throwException: ${message}`)
    throw new UnauthorizedException(message);
  }

  private getRequest(ctx: ExecutionContext) {
    return getClient(ctx);
  }
}
