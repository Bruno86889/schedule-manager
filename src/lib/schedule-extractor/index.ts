import {
  ScheduleParserDivisionDiferentSubject,
  ScheduleParserDivisionSameSubject,
  ScheduleParserNoTeacher,
  ScheduleParserSingleTeacher,
} from "./schedule-parser";
import { SCHEDULE_STRING_TYPES } from "./schedule-string-types.enum";
import { ScheduleTypeChecker } from "./schedule-type-checker";

const CLASS_DIVISION_BY_POSITION = { 0: "A", 1: "B" };
const TEACHER_REGEX = /\(([^)]+)\)/gim;
export const CLASS_DIVISION_CHARACTER = "/";
const CLASS_DIVISION_REGEX = /-./gim;

export const CONSTANTS = {
  CLASS_DIVISION_BY_POSITION,
  TEACHER_REGEX,
  CLASS_DIVISION_REGEX,
  CLASS_DIVISION_CHARACTER,
};

export class ScheduleExtractor {
  parserSingleTeacher: ScheduleParserSingleTeacher;
  parserDivisionDiferentSubject: ScheduleParserDivisionDiferentSubject;
  parserDivisionSameSubject: ScheduleParserDivisionSameSubject;
  parserNoTeacher: ScheduleParserNoTeacher;

  constructor() {
    this.parserSingleTeacher = new ScheduleParserSingleTeacher();
    this.parserDivisionDiferentSubject = new ScheduleParserDivisionDiferentSubject();
    this.parserDivisionSameSubject = new ScheduleParserDivisionSameSubject();
    this.parserNoTeacher = new ScheduleParserNoTeacher();
  }

  extract(data: string) {
    const normalizedData = data.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    const scheduleType = ScheduleTypeChecker.determineType(normalizedData);

    switch (scheduleType) {
      case SCHEDULE_STRING_TYPES.SINGLE:
        return this.parserSingleTeacher.parse(normalizedData);
      case SCHEDULE_STRING_TYPES.CLASS_DIVISION_SAME_SUBJECT:
        return this.parserDivisionSameSubject.parse(normalizedData);
      case SCHEDULE_STRING_TYPES.CLASS_DIVISION_DIFERENT_SUBJECT:
        return this.parserDivisionDiferentSubject.parse(normalizedData);
      case SCHEDULE_STRING_TYPES.NO_TEACHER:
        return this.parserNoTeacher.parse();
      default:
        throw new Error(`Invalid schedule string format! ${normalizedData}`);
    }
  }
}
