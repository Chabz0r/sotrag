import {AutoMap} from "@automapper/classes";
import {ApiProperty} from "@nestjs/swagger";

export class FileUpdateDto {

  @ApiProperty()
  @AutoMap()
  id: string;
}
