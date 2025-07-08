import {ApiProperty} from "@nestjs/swagger";
import {AutoMap} from "@automapper/classes";
import {IsEnum} from "class-validator";
import {Role} from "../entity/utilisateur.entity";

export class UtilisateurCreateDto {

  @ApiProperty()
  @AutoMap()
  departementId: number;

  @ApiProperty()
  @AutoMap()
  code: string;

  @ApiProperty()
  @AutoMap()
  nom: string;

  @ApiProperty()
  @AutoMap()
  prenom: string;

  @ApiProperty()
  @AutoMap()
  tel: string;

  @ApiProperty()
  @AutoMap()
  mail: string;

  @ApiProperty()
  @AutoMap(() => String)
  @IsEnum(Role)
  role: string;
}
