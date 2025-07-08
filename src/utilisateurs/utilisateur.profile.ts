import {AutomapperProfile, InjectMapper} from '@automapper/nestjs';
import {createMap, forMember, mapFrom, Mapper} from '@automapper/core';
import {Injectable} from '@nestjs/common';
import {UtilisateurDto} from "./dto/utilisateur.dto";
import {UtilisateurEntity, Role} from "./entity/utilisateur.entity";
import {UtilisateurCreateDto} from "./dto/utilisateur.create.dto";

@Injectable()
export class UtilisateurProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, UtilisateurEntity, UtilisateurDto,
        forMember(d => d.role, mapFrom(s => Role[s.role])),
        forMember(d => d.departementId, mapFrom(s => s.departementId)),
      );
      createMap(mapper, UtilisateurCreateDto, UtilisateurEntity,
        forMember(d => d.role, mapFrom(s => Role[s.role])),
        forMember(d => d.departementId, mapFrom(s => s.departementId)),
      );
    };
  }
}
