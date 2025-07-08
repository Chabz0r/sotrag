import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, forMember, mapFrom, Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';
import { InterventionDto } from './dto/intervention.dto';
import { InterventionEntity } from './entity/intervention.entity';
import { InterventionCreateDto } from './dto/intervention.create.dto';
import { ReportEntryEntity } from './entity/report-entry.entity';
import { InterventionUpdateDto } from './dto/intervention.update.dto';
import { InterventionTypeDto } from './dto/intervention.type.dto';
import { InterventionSectionDto } from './dto/intervention-section.dto';
import { InterventionSectionEntity } from './entity/intervention-section.entity';
import { InterventionQuestionEntity } from './entity/intervention-question.entity';
import { InterventionQuestionDto } from './dto/intervention-question.dto';
import { InterventionTypeEntity } from './entity/intervention-type.entity';
import { InterventionBlockEntity } from './entity/intervention-block.entity';
import { InterventionBlockDto } from './dto/intervention-block.dto';
import { FileEntity } from '../storage/entity/file.entity';
import { ReportEntryDto } from './dto/report-entry.dto';
import { FileDto } from '../storage/dto/file.dto';
import { environments } from '../environments/environments';

@Injectable()
export class InterventionProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(
        mapper,
        InterventionCreateDto,
        InterventionEntity,
        forMember(
          (d) => d.passedAt,
          mapFrom((s) => new Date(s.passedAt * 1000)),
        ),
        forMember(
          (d) => d.leavingTimeAt,
          mapFrom((s) => new Date(s.leavingTimeAt * 1000)),
        ),
        forMember(
          (d) => d.reportEntries,
          mapFrom((s) =>
            s.reportEntries.map((e) => {
              const entity = new ReportEntryEntity();
              entity.key = e.key;
              entity.value = e.value;
              return entity;
            }),
          ),
        ),
        forMember(
          (d) => d.files,
          mapFrom((s) =>
            s.files.map((e) => {
              const entity = new FileEntity();
              entity.id = e.id;
              return entity;
            }),
          ),
        ),
      );
      createMap(
        mapper,
        InterventionUpdateDto,
        InterventionEntity,
        forMember(
          (d) => d.passedAt,
          mapFrom((s) => new Date(s.passedAt * 1000)),
        ),
        forMember(
          (d) => d.leavingTimeAt,
          mapFrom((s) => new Date(s.leavingTimeAt * 1000)),
        ),
        forMember(
          (d) => d.reportEntries,
          mapFrom((s) =>
            s.reportEntries.map((e) => {
              const entity = new ReportEntryEntity();
              entity.id = e.id;
              entity.key = e.key;
              entity.value = e.value;
              return entity;
            }),
          ),
        ),
        forMember(
          (d) => d.files,
          mapFrom((s) =>
            s.files.map((e) => {
              const entity = new FileEntity();
              entity.id = e.id;
              return entity;
            }),
          ),
        ),
        forMember(
          (d) => d.status,
          mapFrom((s) => s.status),
        ),
      );

      createMap(
        mapper,
        InterventionEntity,
        InterventionDto,
        forMember(
          (d) => d.passedAt,
          mapFrom((s) =>
            parseInt((new Date(s.passedAt).getTime() / 1000).toFixed(0)),
          ),
        ),
        forMember(
          (d) => d.leavingTimeAt,
          mapFrom((s) =>
            parseInt((new Date(s.leavingTimeAt).getTime() / 1000).toFixed(0)),
          ),
        ),
        forMember(
          (d) => d.reportEntries,
          mapFrom((s) => s.reportEntries.map((e) => e)),
        ),
        forMember(
          (d) => d.reportEntries,
          mapFrom((s) =>
            s.reportEntries.map((e) => {
              const entity = new ReportEntryDto();
              entity.id = e.id;
              entity.key = e.key;
              entity.value = e.value;
              return entity;
            }),
          ),
        ),
        forMember(
          (d) => d.files,
          mapFrom((s) =>
            s.files.map((e) => {
              const entity = new FileDto();
              entity.id = e.id;
              entity.url = `${environments.bucket.path}/${e.id}`;
              entity.isPublic = true;
              return entity;
            }),
          ),
        ),
        forMember(
          (d) => d.signature,
          mapFrom((s) => s.signature),
        ),
      );

      createMap(mapper, InterventionQuestionEntity, InterventionQuestionDto);
      createMap(
        mapper,
        InterventionBlockEntity,
        InterventionBlockDto,
        forMember(
          (d) => d.questions,
          mapFrom((s) => s.questions),
        ),
      );
      createMap(
        mapper,
        InterventionSectionEntity,
        InterventionSectionDto,
        forMember(
          (d) => d.blocks,
          mapFrom((s) => s.blocks),
        ),
      );
      createMap(
        mapper,
        InterventionTypeEntity,
        InterventionTypeDto,
        forMember(
          (d) => d.sections,
          mapFrom((s) => s.sections),
        ),
      );
    };
  }
}
