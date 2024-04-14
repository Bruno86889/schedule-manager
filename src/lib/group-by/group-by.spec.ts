import { describe, expect, it } from "@jest/globals";
import { groupBy } from "./group-by";

describe("Utils/groupBy", () => {
  it("should return the data grouped", () => {
    const data = [
      { name: "bruno", score: 10 },
      { name: "Alice", score: 5 },
      { name: "Julia", score: 10 },
    ];

    const expectedResult = {
      10: [
        { name: "bruno", score: 10 },
        { name: "Julia", score: 10 },
      ],
      5: [{ name: "Alice", score: 5 }],
    };
    const sut = groupBy(data, (item) => item.score);

    expect(sut).toEqual(expectedResult);
  });
});
