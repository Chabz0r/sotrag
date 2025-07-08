import {ApiProperty} from "@nestjs/swagger";
import {AutoMap} from "@automapper/classes";

export class ClientCreateDto  {

  @ApiProperty()
  nom: string;

  @ApiProperty()
  @AutoMap()
  departementId: number;

}
