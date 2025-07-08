import {ApiProperty} from "@nestjs/swagger";
import {AutoMap} from "@automapper/classes";
import {DepartementDto} from "../../villes/dto/departement.dto";

export class ClientDto {
  @ApiProperty({description: 'Client id'})
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
  nom: string;

  @ApiProperty()
  @AutoMap()
  createdAt: Date;

  @ApiProperty()
  @AutoMap()
  updatedAt: Date;
}
