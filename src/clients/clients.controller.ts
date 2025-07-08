import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  Request,
  UseInterceptors
} from '@nestjs/common';
import {ApiBearerAuth, ApiBody, ApiOkResponse, ApiTags, ApiUnauthorizedResponse,} from '@nestjs/swagger';
import {ClientsService} from "./clients.service";
import {ClientDto} from "./dto/client.dto";
import {MapInterceptor} from "@automapper/nestjs";
import {ClientEntity} from "./entity/client.entity";
import {ClientCreateDto} from "./dto/client.create.dto";
import {Role} from "../utilisateurs/entity/utilisateur.entity";
import {HasRoles} from "../session/decorators/has-roles.decorator";
import {ClientUpdateDto} from "./dto/client.update.dto";
import {InterventionUpdateDto} from "../interventions/dto/intervention.update.dto";

@ApiTags('Clients')
@Controller('clients')
@ApiBearerAuth()
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {
  }

  @HasRoles(Role.Administrateur, Role.SuperAdministrateur)
  @ApiUnauthorizedResponse({description: 'Unauthorized'})
  @ApiOkResponse({description: "Get all client", type: ClientDto, isArray: true})
  @Get()
  @UseInterceptors(MapInterceptor(ClientEntity, ClientDto, {isArray: true}))
  async getAll() {
    return this.clientsService.getAll();
  }

  @HasRoles(Role.Administrateur, Role.SuperAdministrateur)
  @ApiUnauthorizedResponse({description: 'Unauthorized'})
  @ApiOkResponse({description: "Get client informations", type: ClientDto})
  @Get('/:clientId')
  @UseInterceptors(MapInterceptor(ClientEntity, ClientDto))
  async get(@Param('clientId', new ParseIntPipe()) clientId: number) {
    return this.clientsService.get(clientId);
  }

  @HasRoles(Role.Administrateur, Role.SuperAdministrateur)
  @ApiUnauthorizedResponse({description: 'Unauthorized'})
  @ApiOkResponse({description: "Create client", type: ClientDto})
  @Post()
  @UseInterceptors(MapInterceptor(ClientEntity, ClientDto))
  async create(@Body() clientDto: ClientCreateDto) {
    return this.clientsService.create(clientDto);
  }

  @HasRoles(Role.Administrateur, Role.SuperAdministrateur)
  @ApiUnauthorizedResponse({description: 'Unauthorized'})
  @ApiOkResponse({description: "Update client", type: ClientDto})
  @Patch('/:clientId')
  @UseInterceptors(MapInterceptor(ClientEntity, ClientDto))
  async update(@Param('clientId', new ParseIntPipe()) clientId: number,
               @Body() clientDto: ClientUpdateDto) {
    return this.clientsService.update(clientId, clientDto);
  }

  @HasRoles(Role.Administrateur, Role.SuperAdministrateur)
  @ApiUnauthorizedResponse({description: 'Unauthorized'})
  @ApiOkResponse({description: "Delete client"})
  @Delete(':clientId')
  async delete(
    @Request() req,
    @Param('clientId', new ParseIntPipe()) clientId: number,
  ): Promise<void> {
    return this.clientsService.delete(clientId);
  }
}
