import {AutoMap} from "@automapper/classes";
import {ApiProperty} from "@nestjs/swagger";

export class FileCreateDto {
  @ApiProperty()
  @AutoMap()
  id: string;
}
