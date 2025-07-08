import {Controller, Get, UseInterceptors} from '@nestjs/common';
import {ApiBearerAuth, ApiOkResponse, ApiTags, ApiUnauthorizedResponse,} from '@nestjs/swagger';
import {DepartementsService} from "./departements.service";
import {DepartementDto} from "./dto/departement.dto";
import {MapInterceptor} from "@automapper/nestjs";
import {DepartementEntity} from "./entity/departement.entity";

@ApiTags('Departements')
@Controller('departements')
@ApiBearerAuth()
export class DepartementsController {
  constructor(private readonly departementsService: DepartementsService) {
  }

  @ApiUnauthorizedResponse({description: 'Unauthorized'})
  @ApiOkResponse({description: "Get all departements", type: DepartementDto, isArray: true})
  @Get()
  @UseInterceptors(MapInterceptor(DepartementEntity, DepartementDto, {isArray: true}))
  async getAll(): Promise<DepartementDto[]> {
    return this.departementsService.getAll();
  }
}