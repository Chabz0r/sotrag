import {AutoMap} from "@automapper/classes";
import {ApiProperty} from "@nestjs/swagger";
import {IsEnum} from "class-validator";
import {QuestionType} from "../entity/intervention-question.entity";

export class InterventionQuestionDto {
  @ApiProperty()
  @AutoMap()
  id: number;

  @ApiProperty()
  @AutoMap()
  position: number;

  @ApiProperty()
  @AutoMap()
  key: string;

  @ApiProperty()
  @AutoMap()
  label: string;

  @ApiProperty()
  @AutoMap(() => String)
  @IsEnum(QuestionType)
  type: QuestionType;

  @ApiProperty()
  @AutoMap()
  unite: string;

  @ApiProperty()
  @AutoMap()
  createdAt: Date;

  @ApiProperty()
  @AutoMap()
  updatedAt: Date;
}
