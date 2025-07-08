import {AutoMap} from "@automapper/classes";
import {ApiProperty} from "@nestjs/swagger";
import {InterventionQuestionDto} from "./intervention-question.dto";

export class InterventionBlockDto {
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

  @AutoMap(() => InterventionQuestionDto)
  @ApiProperty({ type: () => InterventionQuestionDto, isArray: true})
  questions: InterventionQuestionDto[];
}
