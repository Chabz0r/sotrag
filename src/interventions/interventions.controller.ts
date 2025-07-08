import {Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Request, UseInterceptors} from '@nestjs/common';
import {ApiBearerAuth, ApiBody, ApiOkResponse, ApiTags, ApiUnauthorizedResponse,} from '@nestjs/swagger';
import {InterventionsService} from "./interventions.service";
import {InterventionDto} from "./dto/intervention.dto";
import {MapInterceptor, MapPipe} from "@automapper/nestjs";
import {InterventionEntity} from "./entity/intervention.entity";
import {InterventionCreateDto} from "./dto/intervention.create.dto";
import {InterventionUpdateDto} from './dto/intervention.update.dto';
import {HasRoles} from "../session/decorators/has-roles.decorator";
import {Role} from "../utilisateurs/entity/utilisateur.entity";

@ApiTags('Interventions')
@Controller('interventions')
@ApiBearerAuth()
export class InterventionsController {
  constructor(private readonly interventionService: InterventionsService) {
  }

  @ApiUnauthorizedResponse({description: 'Unauthorized'})
  @ApiOkResponse({description: "Get all interventions", type: InterventionDto, isArray: true})
  @Get()
  @UseInterceptors(MapInterceptor(InterventionEntity, InterventionDto, {isArray: true}))
  async getAll() {
    return this.interventionService.getAll();
  }

  @ApiUnauthorizedResponse({description: 'Unauthorized'})
  @ApiOkResponse({description: "Get intervention's details", type: InterventionDto})
  @Get(':interventionId')
  @UseInterceptors(MapInterceptor(InterventionEntity, InterventionDto))
  async get(@Param('interventionId', new ParseIntPipe()) interventionId: number) {
    return this.interventionService.get(interventionId);
  }

  @ApiUnauthorizedResponse({description: 'Unauthorized'})
  @ApiOkResponse({description: "Create intervention", type: InterventionDto})
  @Post('')
  @UseInterceptors(MapInterceptor(InterventionEntity, InterventionDto))
  @ApiBody({type: InterventionCreateDto})
  async create(
    @Request() req,
    @Body(MapPipe(InterventionCreateDto, InterventionEntity)) interventionDto: InterventionEntity
  ) {
    return this.interventionService.create(req.user.id, interventionDto);
  }

  @HasRoles(Role.Administrateur, Role.SuperAdministrateur)
  @ApiUnauthorizedResponse({description: 'Unauthorized'})
  @ApiOkResponse({description: "Update intervention", type: InterventionDto})
  @Patch(':interventionId')
  @UseInterceptors(MapInterceptor(InterventionEntity, InterventionDto))
  @ApiBody({type: InterventionUpdateDto})
  async update(
    @Request() req,
    @Param('interventionId', new ParseIntPipe()) interventionId: number,
    @Body(MapPipe(InterventionUpdateDto, InterventionEntity)) interventionDto: InterventionEntity
  ) {
    return this.interventionService.update(interventionId, interventionDto);
  }

  @HasRoles(Role.Administrateur, Role.SuperAdministrateur)
  @ApiUnauthorizedResponse({description: 'Unauthorized'})
  @ApiOkResponse({description: "Delete intervention"})
  @Delete(':interventionId')
  async delete(
    @Request() req,
    @Param('interventionId', new ParseIntPipe()) interventionId: number,
  ): Promise<void>  {
    return this.interventionService.delete(interventionId);
  }
}
