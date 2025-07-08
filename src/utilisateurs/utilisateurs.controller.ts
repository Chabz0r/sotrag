import {
  Body,
  Controller, Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Request,
  UseInterceptors
} from '@nestjs/common';
import {ApiBearerAuth, ApiBody, ApiOkResponse, ApiTags, ApiUnauthorizedResponse,} from '@nestjs/swagger';
import {ActiveUtilisateur} from "./decorators/active-utilisateur.decorator";
import {UtilisateursService} from "../session/utilisateurs.service";
import {UtilisateurDto} from "./dto/utilisateur.dto";
import {MapInterceptor, MapPipe} from "@automapper/nestjs";
import {UtilisateurEntity, Role} from "./entity/utilisateur.entity";
import {UtilisateurCreateDto} from "./dto/utilisateur.create.dto";
import {HasRoles} from "../session/decorators/has-roles.decorator";

@ApiTags('Utilisateurs')
@Controller('utilisateurs')
@ApiBearerAuth()
export class UtilisateursController {
  constructor(private readonly utilisateursService: UtilisateursService) {
  }

  @HasRoles(Role.Administrateur, Role.SuperAdministrateur)
  @ApiUnauthorizedResponse({description: 'Unauthorized'})
  @ApiOkResponse({description: "Get all utilisateurs details", type: UtilisateurDto, isArray: true})
  @Get('/')
  @UseInterceptors(MapInterceptor(UtilisateurEntity, UtilisateurDto, {isArray: true}))
  async getAll() {
    return this.utilisateursService.getAll();
  }

  @HasRoles(Role.Administrateur, Role.SuperAdministrateur)
  @ApiUnauthorizedResponse({description: 'Unauthorized'})
  @ApiOkResponse({description: "Get utilisateur's details", type: UtilisateurDto})
  @Get('/:utilisateurId')
  @UseInterceptors(MapInterceptor(UtilisateurEntity, UtilisateurDto))
  async get(@Param('utilisateurId', new ParseIntPipe()) utilisateurId: number) {
    return this.utilisateursService.get(utilisateurId);
  }

  @ApiUnauthorizedResponse({description: 'Unauthorized'})
  @ApiOkResponse({description: "Get logged in utilisateur's details", type: UtilisateurDto})
  @Get('me')
  @UseInterceptors(MapInterceptor(UtilisateurEntity, UtilisateurDto))
  async getMe(@ActiveUtilisateur('id') utilisateurId: number) {
    return this.utilisateursService.get(utilisateurId);
  }

  @HasRoles(Role.Administrateur, Role.SuperAdministrateur)
  @ApiUnauthorizedResponse({description: 'Unauthorized'})
  @ApiOkResponse({description: "Créer un utilisateur", type: UtilisateurDto})
  @Post()
  @UseInterceptors(MapInterceptor(UtilisateurEntity, UtilisateurDto))
  @ApiBody({type: UtilisateurCreateDto})
  async create(
    @Request() req,
    @Body(MapPipe(UtilisateurCreateDto, UtilisateurEntity)) utilisateurDto: UtilisateurEntity
  ) {
    if (req.user.role < utilisateurDto.role) {
      throw new HttpException('Vous ne pouvez pas éditer un utilisateur qui a plus de persites.', HttpStatus.FORBIDDEN);
    }
    return this.utilisateursService.create(utilisateurDto);
  }

  @HasRoles(Role.Administrateur, Role.SuperAdministrateur)
  @ApiUnauthorizedResponse({description: 'Unauthorized'})
  @ApiOkResponse({description: "Update utilisateur", type: UtilisateurDto})
  @Patch('/:utilisateurId')
  @UseInterceptors(MapInterceptor(UtilisateurEntity, UtilisateurDto))
  @ApiBody({type: UtilisateurCreateDto})
  async update(
    @Request() req,
    @Param('utilisateurId', new ParseIntPipe()) utilisateurId: number,
    @Body(MapPipe(UtilisateurCreateDto, UtilisateurEntity)) utilisateurDto: UtilisateurEntity
  ) {
    if (req.user.role < utilisateurDto.role) {
      throw new HttpException('Vous ne pouvez pas éditer un utilisateur qui a plus de persites.', HttpStatus.FORBIDDEN);
    }
    return this.utilisateursService.update(utilisateurId, utilisateurDto);
  }

  @HasRoles(Role.Administrateur, Role.SuperAdministrateur)
  @ApiUnauthorizedResponse({description: 'Unauthorized'})
  @ApiOkResponse({description: "Créer un nouveau mot de passe"})
  @Post('/:utilisateurId/passwords/new')
  async newPassword(
    @Request() req,
    @Param('utilisateurId', new ParseIntPipe()) utilisateurId: number,
  ) {
    return this.utilisateursService.resetPassword(utilisateurId);
  }

  @HasRoles(Role.Administrateur, Role.SuperAdministrateur)
  @ApiUnauthorizedResponse({description: 'Unauthorized'})
  @ApiOkResponse({description: "Delete utilisateur"})
  @Delete(':utilisateurId')
  async delete(
    @Request() req,
    @Param('utilisateurId', new ParseIntPipe()) utilisateurId: number,
  ): Promise<void> {
    return this.utilisateursService.delete(utilisateurId);
  }
}
