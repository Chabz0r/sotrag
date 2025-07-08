import {AutoMap} from "@automapper/classes";
import {ApiProperty} from "@nestjs/swagger";
import {DepartementDto} from "../../villes/dto/departement.dto";
import {VilleDto} from "../../villes/dto/ville.dto";
import {ClientDto} from "./client.dto";

export class SiteDto {

  @ApiProperty()
  @AutoMap()
  id: number;

  @ApiProperty()
  @AutoMap()
  clientId: number;

  @ApiProperty({ type: () => ClientDto })
  @AutoMap(() => ClientDto)
  client: number;

  @ApiProperty()
  @AutoMap()
  affaire: string;

  @ApiProperty()
  @AutoMap()
  nom: string;

  @ApiProperty()
  @AutoMap()
  contactNom: string;

  @ApiProperty()
  @AutoMap()
  contactPrenom: string;

  @ApiProperty()
  @AutoMap()
  contactTel: string;

  @ApiProperty()
  @AutoMap()
  contactMail: string;

  @ApiProperty()
  @AutoMap()
  latitude: number;

  @ApiProperty()
  @AutoMap()
  longitude: number;

  @ApiProperty()
  @AutoMap()
  adresse: string;

  @ApiProperty()
  @AutoMap()
  codePostal: string;

  @ApiProperty()
  @AutoMap()
  villeId: number;

  @ApiProperty({ type: () => VilleDto })
  @AutoMap(() => VilleDto)
  ville: VilleDto;

  @ApiProperty()
  @AutoMap()
  departementId: number;

  @ApiProperty({ type: () => DepartementDto })
  @AutoMap(() => DepartementDto)
  departement: DepartementDto;

  @ApiProperty()
  @AutoMap()
  createdAt: Date;

  @ApiProperty()
  @AutoMap()
  updatedAt: Date;
}
