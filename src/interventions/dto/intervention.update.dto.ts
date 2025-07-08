import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { ReportEntryUpdateDto } from './report-entry.update.dto';
import { IsEnum } from 'class-validator';
import { InterventionStatus } from '../entity/intervention.entity';
import { FileUpdateDto } from '../../storage/dto/file.update.dto';

export class InterventionUpdateDto {
  @AutoMap()
  @ApiProperty()
  passedAt: number;

  @AutoMap()
  @ApiProperty()
  leavingTimeAt: number;

  @ApiProperty()
  @AutoMap(() => Number)
  @IsEnum(InterventionStatus)
  status: InterventionStatus;

  @AutoMap(() => ReportEntryUpdateDto)
  @ApiProperty({ type: () => ReportEntryUpdateDto, isArray: true })
  reportEntries: ReportEntryUpdateDto[];

  @AutoMap(() => FileUpdateDto)
  @ApiProperty({ type: () => FileUpdateDto, isArray: true })
  files: FileUpdateDto[];
}
