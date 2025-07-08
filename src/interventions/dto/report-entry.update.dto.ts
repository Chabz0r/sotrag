import {AutoMap} from "@automapper/classes";
import {ApiProperty} from "@nestjs/swagger";

export class ReportEntryUpdateDto {

  @ApiProperty({ nullable: true, required: false })
  @AutoMap()
  id?: number;

  @ApiProperty({ required: true})
  @AutoMap()
  key: string;

  @ApiProperty({ required: true})
  @AutoMap()
  value: string;
}
