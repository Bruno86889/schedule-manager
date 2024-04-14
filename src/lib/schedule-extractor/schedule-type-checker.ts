import { CLASS_DIVISION_CHARACTER, CONSTANTS } from ".";
import { SCHEDULE_STRING_TYPES } from "./schedule-string-types.enum";

export class ScheduleTypeChecker {
  static determineType(scheduleString: string): SCHEDULE_STRING_TYPES {
    const isEmptyClass = scheduleString == "" || scheduleString == "-";

    if (isEmptyClass) return SCHEDULE_STRING_TYPES.NO_TEACHER;

    const teacherSubstringMatcher = scheduleString.match(CONSTANTS.TEACHER_REGEX);

    if(!teacherSubstringMatcher) return

    const isDiferentClassSubjectWithClassDivision = teacherSubstringMatcher?.length === 2;

    if (isDiferentClassSubjectWithClassDivision)
      return SCHEDULE_STRING_TYPES.CLASS_DIVISION_DIFERENT_SUBJECT;

    const isHasClassDivision = teacherSubstringMatcher?.[0].includes(CLASS_DIVISION_CHARACTER);

    if (isHasClassDivision) return SCHEDULE_STRING_TYPES.CLASS_DIVISION_SAME_SUBJECT;

    return SCHEDULE_STRING_TYPES.SINGLE;
  }
}
