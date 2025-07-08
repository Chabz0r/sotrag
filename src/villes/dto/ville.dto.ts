import {ApiProperty} from "@nestjs/swagger";
import {AutoMap} from "@automapper/classes";

export class VilleDto {
  @AutoMap()
  @ApiProperty()
  id: number;

  @AutoMap()
  @ApiProperty()
  departementId: number;

  @AutoMap()
  @ApiProperty()
  nom: string;

  @AutoMap()
  @ApiProperty()
  codePostal: string;

  @AutoMap()
  @ApiProperty()
  createdAt:  Date;

  @AutoMap()
  @ApiProperty()
  updatedAt:  Date;
}
