import { describe, expect, it } from "@jest/globals";
import { ScheduleParserSingleTeacher } from "./single-teacher";

describe("ScheduleParsers/SingleTeacher", () => {
  const parser = new ScheduleParserSingleTeacher();
  it("should parse schedule string into schedule object", () => {
    const singleSchedule = "PE (Aline)";
    const expectedSingleScheduleResult = [{ teacher: "Aline", subject: "PE", classDivision: null }];

    const sut = parser.parse(singleSchedule);

    expect(sut).toEqual(expectedSingleScheduleResult);
  });

  it("should parse schedule string into schedule object with classDivision character present", () => {
    const singleScheduleWithClassDivision = "PE (Aline)-A";
    const expectedSingleScheduleWithClassDivisionCharacterResult = [
      { teacher: "Aline", subject: "PE", classDivision: "A" },
    ];

    const sut = parser.parse(singleScheduleWithClassDivision);

    expect(sut).toEqual(expectedSingleScheduleWithClassDivisionCharacterResult);
  });
});
