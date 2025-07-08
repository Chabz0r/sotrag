import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Request,
  UseInterceptors
} from '@nestjs/common';
import {ApiBearerAuth, ApiOkResponse, ApiTags, ApiUnauthorizedResponse,} from '@nestjs/swagger';
import {SitesService} from "./sites.service";
import {SiteDto} from "./dto/site.dto";
import {MapInterceptor} from "@automapper/nestjs";
import {SiteEntity} from "./entity/site.entity";
import {SiteCreateDto} from "./dto/site.create.dto";
import {Role} from "../utilisateurs/entity/utilisateur.entity";
import {HasRoles} from "../session/decorators/has-roles.decorator";

@ApiTags('Sites')
@Controller('sites')
@ApiBearerAuth()
export class SitesController {
  constructor(private readonly sitesService: SitesService) {
  }

  @ApiUnauthorizedResponse({description: 'Unauthorized'})
  @ApiOkResponse({description: "Get all site", type: SiteDto, isArray: true})
  @Get()
  @UseInterceptors(MapInterceptor(SiteEntity, SiteDto, {isArray: true}))
  async getAll() {
    return this.sitesService.getAll();
  }

  @ApiUnauthorizedResponse({description: 'Unauthorized'})
  @ApiOkResponse({description: "Get site informations", type: SiteDto})
  @Get('/:siteId')
  @UseInterceptors(MapInterceptor(SiteEntity, SiteDto))
  async get(@Param('siteId', new ParseIntPipe()) siteId: number) {
    return this.sitesService.get(siteId);
  }

  @HasRoles(Role.Administrateur, Role.SuperAdministrateur)
  @ApiUnauthorizedResponse({description: 'Unauthorized'})
  @ApiOkResponse({description: "Create site", type: SiteDto})
  @Post()
  @UseInterceptors(MapInterceptor(SiteEntity, SiteDto))
  async create(@Body() siteDto: SiteCreateDto) {
    return this.sitesService.create(siteDto);
  }

  @HasRoles(Role.Administrateur, Role.SuperAdministrateur)
  @ApiUnauthorizedResponse({description: 'Unauthorized'})
  @ApiOkResponse({description: "Update site", type: SiteDto})
  @Patch('/:siteId')
  @UseInterceptors(MapInterceptor(SiteEntity, SiteDto))
  async update(
    @Param('siteId', new ParseIntPipe()) siteId: number,
    @Body() siteDto: SiteCreateDto
  ) {
    return this.sitesService.update(siteId, siteDto);
  }

  @HasRoles(Role.Administrateur, Role.SuperAdministrateur)
  @ApiUnauthorizedResponse({description: 'Unauthorized'})
  @ApiOkResponse({description: "Delete site"})
  @Delete(':siteId')
  async delete(
    @Request() req,
    @Param('siteId', new ParseIntPipe()) siteId: number,
  ): Promise<void> {
    return this.sitesService.delete(siteId);
  }
}
