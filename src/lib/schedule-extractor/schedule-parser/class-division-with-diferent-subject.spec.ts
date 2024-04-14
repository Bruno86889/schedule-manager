import { describe, expect, it } from "@jest/globals";
import { ScheduleParserDivisionDiferentSubject } from "./class-division-with-diferent-subject";

describe("ScheduleParsers/ClassDivisionWithDifferentSubject", () => {
  const parser = new ScheduleParserDivisionDiferentSubject();

  it("should parser schedule string into schedule object", () => {
    const expectedDiferentSubjectWithClassDivisionResultivi = [
      {
        teacher: "Lucas Serafim",
        subject: "PAM I",
        classDivision: "B",
      },
      {
        teacher: "Paulo A.",
        subject: "BD II",
        classDivision: "A",
      },
    ];

    const diferentClassSchedule = "PAM I (Lucas Serafim)-B / BD II (Paulo A.)-A";

    const sut = parser.parse(diferentClassSchedule);

    expect(sut).toEqual(expectedDiferentSubjectWithClassDivisionResultivi);
  });
});
