import {ApiProperty} from "@nestjs/swagger";
import {AutoMap} from "@automapper/classes";
import {VilleDto} from "./ville.dto";

export class DepartementDto {
  @ApiProperty()
  @AutoMap()
  id: number;

  @ApiProperty()
  @AutoMap()
  code: string;

  @ApiProperty()
  @AutoMap()
  nom: string;

  @ApiProperty({type: () => VilleDto, isArray: true})
  @AutoMap(() => VilleDto)
  villes: VilleDto[];

  @ApiProperty()
  @AutoMap()
  createdAt: Date;

  @ApiProperty()
  @AutoMap()
  updatedAt: Date;
}
