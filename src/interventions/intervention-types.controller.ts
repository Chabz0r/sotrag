import {Controller, Get, Param, ParseIntPipe, UseInterceptors} from '@nestjs/common';
import {ApiBearerAuth, ApiOkResponse, ApiTags, ApiUnauthorizedResponse,} from '@nestjs/swagger';
import {MapInterceptor} from "@automapper/nestjs";
import {InterventionTypesService} from "./intervention-types.service";
import {InterventionTypeEntity} from "./entity/intervention-type.entity";
import {InterventionTypeDto} from "./dto/intervention.type.dto";

@ApiTags('InterventionTypes')
@Controller('intervention-types')
@ApiBearerAuth()
export class InterventionTypesController {
  constructor(private readonly interventionTypeService: InterventionTypesService) {
  }

  @ApiUnauthorizedResponse({description: 'Unauthorized'})
  @ApiOkResponse({description: "Get all intervention types", type: InterventionTypeDto, isArray: true})
  @Get()
  @UseInterceptors(MapInterceptor(InterventionTypeEntity, InterventionTypeDto, {isArray: true}))
  async getAll() {
    return this.interventionTypeService.getAll();
  }

  @ApiUnauthorizedResponse({description: 'Unauthorized'})
  @ApiOkResponse({description: "Get intervention type's details", type: InterventionTypeDto})
  @Get('/:interventionTypeId')
  @UseInterceptors(MapInterceptor(InterventionTypeEntity, InterventionTypeDto))
  async get(@Param('interventionTypeId', new ParseIntPipe()) interventionTypeId: number) {
    return this.interventionTypeService.get(interventionTypeId);
  }
}
