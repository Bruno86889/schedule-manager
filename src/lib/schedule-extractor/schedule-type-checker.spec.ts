import { describe, expect, it } from "@jest/globals";
import { SCHEDULE_STRING_TYPES } from "./schedule-string-types.enum";
import { ScheduleTypeChecker } from "./schedule-type-checker";

const noTeacher = "-";
const singleSchedule = "PE (Aline)-A";
const sameTeacherSchedule = "DS (Wilton/Lucas Serafim)";
const diferentClassSchedule = "PAM I (Lucas Serafim)-B / BD II (Paulo A.)-A";

describe("To determinate schedule string type...", () => {
  it("should determine which schedule type", () => {
    expect(ScheduleTypeChecker.determineType(singleSchedule)).toBe(SCHEDULE_STRING_TYPES.SINGLE);
    expect(ScheduleTypeChecker.determineType(sameTeacherSchedule)).toBe(
      SCHEDULE_STRING_TYPES.CLASS_DIVISION_SAME_SUBJECT,
    );
    expect(ScheduleTypeChecker.determineType(diferentClassSchedule)).toBe(
      SCHEDULE_STRING_TYPES.CLASS_DIVISION_DIFERENT_SUBJECT,
    );
    expect(ScheduleTypeChecker.determineType(noTeacher)).toBe(SCHEDULE_STRING_TYPES.NO_TEACHER);
  });
});
