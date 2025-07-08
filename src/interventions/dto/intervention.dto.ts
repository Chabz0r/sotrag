import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { UtilisateurDto } from '../../utilisateurs/dto/utilisateur.dto';
import { ReportEntryDto } from './report-entry.dto';
import { IsEnum } from 'class-validator';
import { InterventionStatus } from '../entity/intervention.entity';
import { InterventionTypeDto } from './intervention.type.dto';
import { SiteDto } from '../../clients/dto/site.dto';
import { FileDto } from '../../storage/dto/file.dto';

export class InterventionDto {
  @ApiProperty()
  @AutoMap()
  id: number;

  @AutoMap()
  @ApiProperty()
  siteId: number;

  @AutoMap(() => SiteDto)
  @ApiProperty({ type: () => SiteDto })
  site: SiteDto;

  @AutoMap()
  @ApiProperty()
  interventionTypeId: number;

  @AutoMap(() => InterventionTypeDto)
  @ApiProperty({ type: () => InterventionTypeDto })
  interventionType: InterventionTypeDto;

  @AutoMap()
  @ApiProperty()
  utilisateurId: number;

  @AutoMap(() => UtilisateurDto)
  @ApiProperty({ type: () => UtilisateurDto })
  utilisateur: UtilisateurDto;

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

  @AutoMap(() => ReportEntryDto)
  @ApiProperty({ type: () => ReportEntryDto, isArray: true })
  reportEntries: ReportEntryDto[];

  @AutoMap(() => FileDto)
  @ApiProperty({ type: () => FileDto, isArray: true })
  files: FileDto[];

  @AutoMap()
  @ApiProperty({ nullable: true, required: false })
  signature?: string | null;

  @AutoMap()
  @ApiProperty({ nullable: true, required: false })
  signatureTech?: string | null;
}
