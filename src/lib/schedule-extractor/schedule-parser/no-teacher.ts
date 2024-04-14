import { ScheduleParser } from "./schedule-parser";

// -
export class ScheduleParserNoTeacher extends ScheduleParser {
  parse() {
    return [{ teacher: "-", classDivision: null, subject: "-" }];
  }
}
