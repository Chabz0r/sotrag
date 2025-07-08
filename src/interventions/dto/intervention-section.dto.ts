import {AutoMap} from "@automapper/classes";
import {ApiProperty} from "@nestjs/swagger";
import {InterventionBlockDto} from "./intervention-block.dto";

export class InterventionSectionDto {
  @ApiProperty()
  @AutoMap()
  id: number;

  @ApiProperty()
  @AutoMap()
  position: number;

  @ApiProperty()
  @AutoMap()
  label: string;

  @ApiProperty()
  @AutoMap()
  createdAt: Date;

  @ApiProperty()
  @AutoMap()
  updatedAt: Date;

  @AutoMap(() => InterventionBlockDto)
  @ApiProperty({type: () => InterventionBlockDto, isArray: true})
  blocks: InterventionBlockDto[];
}
