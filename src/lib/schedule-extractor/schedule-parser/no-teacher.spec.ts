import { describe, expect, it } from "@jest/globals";
import { ScheduleParserNoTeacher } from "./no-teacher";

describe("ScheduleParsers/NoTeacher", () => {
  const parser = new ScheduleParserNoTeacher();

  it("should parse schedule string into schedule object", () => {
    const scheduleString = "-";
    const expectedNoTeacherResult = [{ teacher: "-", subject: "-", classDivision: null }];

    const sut = parser.parse();

    expect(sut).toEqual(expectedNoTeacherResult);
  });
});
