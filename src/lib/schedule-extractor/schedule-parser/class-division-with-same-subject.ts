import { CONSTANTS } from "..";
import { ScheduleParser } from "./schedule-parser";

// DS (Wilton / Lucas Serafim)

export class ScheduleParserDivisionSameSubject implements ScheduleParser {
  parse(scheduleString: string) {
    const subject = scheduleString.replace(CONSTANTS.TEACHER_REGEX, "").slice(0, -1);

    const teachers = scheduleString
      .match(CONSTANTS.TEACHER_REGEX)?.[0]
      .replace("(", "")
      .replace(")", "")
      .split("/");

    const result = teachers.map((teacher, i) => {
      return {
        teacher,
        subject,
        classDivision: CONSTANTS.CLASS_DIVISION_BY_POSITION[i],
      };
    });

    return result;
  }
}
