import { CONSTANTS } from "..";
import { ScheduleParser } from "./schedule-parser";

export class ScheduleParserSingleTeacher implements ScheduleParser {
  // PE (Aline)
  // PE (Aline)-A
  parse(scheduleString: string) {
    const teacher = scheduleString
      .match(CONSTANTS.TEACHER_REGEX)?.[0]
      .replace("(", "")
      .replace(")", "");

    const subject = scheduleString
      .replace(CONSTANTS.TEACHER_REGEX, "")
      .replace(CONSTANTS.CLASS_DIVISION_REGEX, "")
      .slice(0, -1)
      .trim();

    const foundClassDivision = scheduleString.match(CONSTANTS.CLASS_DIVISION_REGEX);
    const classDivision = foundClassDivision?.[0]?.at(1) || null;

    return [{ teacher, subject, classDivision }];
  }
}
