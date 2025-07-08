import {Body, Controller, HttpCode, HttpStatus, Logger, Post} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiOkResponse,
  ApiProperty,
  ApiTags,
  ApiUnauthorizedResponse
} from "@nestjs/swagger";
import {SignInDto} from "./dto/sign-in.dto";
import {ActiveUtilisateur} from "../utilisateurs/decorators/active-utilisateur.decorator";
import {AuthService, TokenResponse} from "../session/auth.service";
import {AuthNotRequired} from "../session/decorators/auth-not-required.decorator";
import * as bcrypt from "bcrypt";

class TokenResponseDto implements TokenResponse {
  @ApiProperty()
  access_token: string;

  @ApiProperty()
  refresh_token: string;
}

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  private readonly logger = new Logger(AuthController.name);

  constructor(private authService: AuthService) {}

  @ApiBadRequestResponse({
    description: 'Return errors for invalid sign in fields',
  })
  @ApiOkResponse({
    description: 'Utilisateur has been successfully signed in',
    isArray: false,
    type: TokenResponseDto,
  })
  @HttpCode(HttpStatus.OK)
  @Post('sign-in')
  @AuthNotRequired()
  async signIn(@Body() signInDto: SignInDto) {
    this.logger.log(`Signing in user ${signInDto.username}`);
    this.logger.log(`Signing in user ${signInDto.password} -> ${await bcrypt.hash('123456', 10)}`)
    return this.authService.login(
      await this.authService.validate(signInDto.username, signInDto.password),
    );
  }

  @Post('refresh-token')
  async refreshToken(@Body('refreshToken') refreshToken: string) {
    return this.authService.loginWithRefreshToken(refreshToken);
  }

  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiOkResponse({ description: 'Utilisateur has been successfully signed out' })
  @ApiBearerAuth()
  @HttpCode(HttpStatus.OK)
  @Post('sign-out')
  signOut(@ActiveUtilisateur('id') userId: string): Promise<void> {
    return this.authService.signOut(userId);
  }
}
