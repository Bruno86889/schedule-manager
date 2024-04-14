import { describe, expect, it } from "@jest/globals";
import { ScheduleExtractor } from ".";

const expectedSingleScheduleResult = [{ teacher: "Aline", subject: "PE", classDivision: "A" }];

const expectedSingleScheduleWithClassDivisionCharacterResult = [
  { teacher: "Aline", subject: "PE", classDivision: "A" },
];

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

const expectedNoTeacherResult = [{ teacher: "-", subject: "-", classDivision: null }];

describe("Lib/ScheduleExtractor", () => {
  const noTeacher = "-";
  const singleSchedule = "PE (Aline)-A";
  const sameTeacherSchedule = "DS (Wilton/Lucas Serafim)";
  const diferentClassSchedule = "PAM I (Lucas Serafim)-B / BD II (Paulo A.)-A";
  const singleScheduleWithClassDivision = "PE (Aline)-A";

  const extractor = new ScheduleExtractor();

  describe("To use parser...", () => {
    it("should split a schedule string", () => {
        const sut = extractor.extract(singleSchedule);

      expect(sut).toEqual(expectedSingleScheduleResult);
    });

    it("should split a schedule string with classDivision character present", () => {
      const sut = extractor.extract(singleScheduleWithClassDivision);

      expect(sut).toEqual(expectedSingleScheduleWithClassDivisionCharacterResult);
    });

    it("should split a schedule string with two teacher with same class subject", () => {
      const sameTeacherSchedule = "DS (Wilton/Lucas Serafim)";

      const sut = extractor.extract(sameTeacherSchedule);

      expect(sut).toEqual(expectedSameSubjectWithClassDivisionResult);
    });

    it("should split a schedule string with two teacher with diferent class subject", () => {
      const diferentClassSchedule = "PAM I (Lucas Serafim)-B / BD II (Paulo A.)-A";

      const sut = extractor.extract(diferentClassSchedule);

      expect(sut).toEqual(expectedDiferentSubjectWithClassDivisionResultivi);
    });

    it("should split a schedule string with no teacher", () => {
      const noTeacher = "";
      const sut = extractor.extract(noTeacher);

      expect(sut).toEqual(expectedNoTeacherResult);
    });
  });

  describe("To extract schedules from string...", () => {
    it("should extract class schedules based on the string structure", () => {
      // expect(extractor.extract(singleSchedule)).toEqual(expectedSingleScheduleResult);
      expect(extractor.extract(singleScheduleWithClassDivision)).toEqual(
        expectedSingleScheduleResult,
      );
      expect(extractor.extract(sameTeacherSchedule)).toEqual(
        expectedSameSubjectWithClassDivisionResult,
      );
      expect(extractor.extract(diferentClassSchedule)).toEqual(
        expectedDiferentSubjectWithClassDivisionResultivi,
      );
      expect(extractor.extract(noTeacher)).toEqual(expectedNoTeacherResult);
    });

    it("should throw a error if the schedule string structure is invalid", () => {
      const invalidScheduleString = "PA [Aline]";

      try {
        extractor.extract(invalidScheduleString);
      } catch (err) {
        expect(err).toBeInstanceOf(Error);
      }
    });
  });
});
