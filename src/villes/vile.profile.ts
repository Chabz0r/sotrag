import {AutomapperProfile, InjectMapper} from '@automapper/nestjs';
import {createMap, forMember, mapFrom, Mapper} from '@automapper/core';
import {Injectable} from '@nestjs/common';
import {VilleDto} from "./dto/ville.dto";
import {VilleEntity} from "./entity/ville.entity";
import {DepartementEntity} from "./entity/departement.entity";
import {DepartementDto} from "./dto/departement.dto";

@Injectable()
export class VilleProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, DepartementEntity, DepartementDto,
       forMember(d => d.villes, mapFrom(s => s.villes))
      );
      createMap(mapper, VilleEntity, VilleDto);
    };
  }
}
