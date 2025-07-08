import {AutoMap} from "@automapper/classes";
import {ApiProperty} from "@nestjs/swagger";
import {InterventionSectionDto} from "./intervention-section.dto";

export class InterventionTypeDto {

  @ApiProperty()
  @AutoMap()
  id: number;

  @ApiProperty()
  @AutoMap()
  nom: string;

  @ApiProperty({type: () => InterventionSectionDto, isArray: true})
  @AutoMap(() => InterventionSectionDto)
  sections: InterventionSectionDto[];

  @ApiProperty()
  @AutoMap()
  createdAt: Date;

  @ApiProperty()
  @AutoMap()
  updatedAt: Date;
}
