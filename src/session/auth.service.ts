import {Injectable, Logger, UnauthorizedException} from '@nestjs/common';
import {UtilisateursService} from './utilisateurs.service';
import {JwtService, JwtSignOptions} from '@nestjs/jwt';
import {UtilisateurEntity, Role} from "../utilisateurs/entity/utilisateur.entity";
import * as bcrypt from 'bcrypt';
import {environments} from '../environments/environments';
import {Token} from "./guard/jwt-auth.guard";

export interface TokenResponse {
  access_token: string;
  refresh_token: string;
}

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private utilisateursService: UtilisateursService,
    private jwtService: JwtService
  ) {}

  async validate(username: string, password: string) {
    const user = await this.utilisateursService.findOne(username);
    if (!user) {
      throw new UnauthorizedException('Utilisateur does not exist');
    }

    if (!(await this.validatePassword(user, password))) {
      throw new UnauthorizedException('Incorrect password');
    }

    return user;
  }

  async login(user: UtilisateurEntity): Promise<TokenResponse> {
    const payload: Token = {
      sub: user.id,
      username: user.fullName,
      departementId: user.departementId,
      role: Role[user.role],
    };

    let refresh_token: string;

    if (environments.accessTokenExpiration) {
      refresh_token = await this.jwtService.signAsync(
        payload,
        this.getRefreshTokenOptions(user),
      );
    }

    return {
      access_token: await this.jwtService.signAsync(
        payload,
        this.getAccessTokenOptions(user),
      ),
      refresh_token,
    };
  }

  private async validatePassword(user: UtilisateurEntity, password: string): Promise<boolean> {
    return bcrypt.compare(password, user.password);
  }

  signOut(userId: string) {
    return Promise.resolve(undefined);
  }

  async loginWithRefreshToken(refreshToken: string) {
    try {
      const decoded = this.jwtService.decode(refreshToken) as Token;

      if (!decoded) {
        throw new Error();
      }

      const user = await this.utilisateursService.get(decoded.sub);

      await this.jwtService.verifyAsync<Token>(
        refreshToken,
        this.getRefreshTokenOptions(user),
      );

      return this.login(user);
    } catch {
      throw new UnauthorizedException('Invalid token');
    }
  }

  getRefreshTokenOptions(user: UtilisateurEntity): JwtSignOptions {
    return this.getTokenOptions('refresh', user);
  }

  getAccessTokenOptions(user: UtilisateurEntity): JwtSignOptions {
    return this.getTokenOptions('access', user);
  }

  private getTokenOptions(type: 'refresh' | 'access', user: UtilisateurEntity) {
    const options: JwtSignOptions = {
      secret: environments[type + 'TokenSecret'] + user.sessionToken,
    };

    const expiration = environments[type + 'TokenExpiration'];

    if (expiration) {
      options.expiresIn = expiration;
    }

    return options;
  }
}
