import {AutoMap} from "@automapper/classes";
import {ApiProperty} from "@nestjs/swagger";

export class ReportEntryDto {

  @ApiProperty()
  @AutoMap()
  id: number;

  @ApiProperty()
  @AutoMap()
  key: string;

  @ApiProperty()
  @AutoMap()
  value: string;
}
