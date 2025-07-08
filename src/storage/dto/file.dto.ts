import {ApiProperty} from "@nestjs/swagger";
import {AutoMap} from "@automapper/classes";

export class FileDto {
  @ApiProperty({description: 'File id'})
  @AutoMap()
  id: string;

  @ApiProperty()
  @AutoMap()
  url: string;

  @ApiProperty()
  @AutoMap()
  isPublic: boolean;
}
