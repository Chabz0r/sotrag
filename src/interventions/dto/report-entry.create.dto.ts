import {AutoMap} from "@automapper/classes";
import {ApiProperty} from "@nestjs/swagger";

export class ReportEntryCreateDto {

  @ApiProperty()
  @AutoMap()
  key: string;

  @ApiProperty()
  @AutoMap()
  value: string;
}
