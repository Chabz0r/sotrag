import {ApiProperty} from "@nestjs/swagger";
import {AutoMap} from "@automapper/classes";
import {DepartementDto} from "../../villes/dto/departement.dto";
import {IsEnum} from "class-validator";
import {Role} from "../entity/utilisateur.entity";

export class UtilisateurDto {

  @ApiProperty()
  @AutoMap()
  id: number;

  @ApiProperty()
  @AutoMap()
  departementId: number;

  @ApiProperty()
  @AutoMap(() => DepartementDto)
  departement: DepartementDto;

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

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
