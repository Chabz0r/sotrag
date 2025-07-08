import {ApiProperty} from "@nestjs/swagger";
import {AutoMap} from "@automapper/classes";

export class ClientUpdateDto  {

  @ApiProperty()
  nom: string;

  @ApiProperty()
  @AutoMap()
  departementId: number;

}
