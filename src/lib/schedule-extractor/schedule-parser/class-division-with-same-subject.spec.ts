import { describe, expect, it } from "@jest/globals";
import { ScheduleParserDivisionSameSubject } from "./class-division-with-same-subject";

describe("ScheduleParsers/ClassDivisionWithSameSubject", () => {
  const parser = new ScheduleParserDivisionSameSubject();
  it("should parse schedule string into schedule object", () => {
    const sameSubjectSchedule = "DS (Wilton/Lucas Serafim)";
    const expectedSameSubjectWithClassDivisionResult = [
      {
        teacher: "Wilton",
        subject: "DS",
        classDivision: "A",
      },
      {
        teacher: "Lucas Serafim",
        subject: "DS",
        classDivision: "B",
      },
    ];

    const sut = parser.parse(sameSubjectSchedule);

    expect(sut).toEqual(expectedSameSubjectWithClassDivisionResult);
  });
});
