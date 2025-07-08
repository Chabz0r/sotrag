import {AutoMap} from "@automapper/classes";
import {ApiProperty} from "@nestjs/swagger";

export class SiteCreateDto {

  @ApiProperty()
  @AutoMap()
  clientId: number;

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

  @ApiProperty()
  @AutoMap()
  departementId: number;
}
