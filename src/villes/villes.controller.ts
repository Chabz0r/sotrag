import {Controller, Get, UseInterceptors} from '@nestjs/common';
import {ApiBearerAuth, ApiOkResponse, ApiTags, ApiUnauthorizedResponse,} from '@nestjs/swagger';
import {VillesService} from "./villes.service";
import {VilleDto} from "./dto/ville.dto";
import {MapInterceptor} from "@automapper/nestjs";
import {VilleEntity} from "./entity/ville.entity";

@ApiTags('Villes')
@Controller('villes')
export class VillesController {
  constructor(private readonly villesService: VillesService) {}

  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiOkResponse({ description: "Get all cities", type: VilleDto, isArray: true })
  @ApiBearerAuth()
  @Get()
  @UseInterceptors(MapInterceptor(VilleEntity, VilleDto, { isArray: true }))
  async getAll(){
    return this.villesService.getAll();
  }
}