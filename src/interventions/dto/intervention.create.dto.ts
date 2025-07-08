import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { ReportEntryCreateDto } from './report-entry.create.dto';
import { FileCreateDto } from '../../storage/dto/file.create.dto';

export class InterventionCreateDto {
  @AutoMap()
  @ApiProperty()
  siteId: number;

  @AutoMap()
  @ApiProperty()
  interventionTypeId: number;

  @AutoMap()
  @ApiProperty()
  passedAt: number;

  @AutoMap()
  @ApiProperty()
  leavingTimeAt: number;

  @AutoMap(() => ReportEntryCreateDto)
  @ApiProperty({ type: () => ReportEntryCreateDto, isArray: true })
  reportEntries: ReportEntryCreateDto[];

  @AutoMap(() => FileCreateDto)
  @ApiProperty({ type: () => FileCreateDto, isArray: true })
  files: FileCreateDto[];

  @AutoMap()
  @ApiProperty({ nullable: true, required: false })
  signature?: string | null;

  @AutoMap()
  @ApiProperty({ nullable: true, required: false })
  signatureTech?: string | null;
}
