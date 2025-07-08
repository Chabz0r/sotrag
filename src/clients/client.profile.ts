import {AutomapperProfile, InjectMapper} from '@automapper/nestjs';
import {createMap, forMember, mapFrom, Mapper} from '@automapper/core';
import {Injectable} from '@nestjs/common';
import {ClientDto} from "./dto/client.dto";
import {ClientEntity} from "./entity/client.entity";
import {ClientCreateDto} from "./dto/client.create.dto";
import {SiteEntity} from "./entity/site.entity";
import {SiteCreateDto} from "./dto/site.create.dto";
import {SiteDto} from "./dto/site.dto";

@Injectable()
export class ClientProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, ClientEntity, ClientDto);
      createMap(mapper, ClientCreateDto, ClientEntity);

      createMap(mapper, SiteEntity, SiteDto);
      createMap(mapper, SiteCreateDto, SiteEntity,
        forMember(d => d.villeId, mapFrom(s => s.villeId)),
        forMember(d => d.departementId, mapFrom(s => s.departementId)),
      );
    };
  }
}
