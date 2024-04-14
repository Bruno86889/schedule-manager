import { describe, expect, it } from "@jest/globals";
import { Cell, CellBuilder } from "./cell-builder";

describe("Table/Builders/CellBuilder", () => {
  const data = [
    ["one", "two"],
    ["three", "four"],
  ];

  const expected: Cell<string>[] = [
    { columnIndex: 0, rowIndex: 0, value: "one" },
    { columnIndex: 1, rowIndex: 0, value: "two" },
    { columnIndex: 0, rowIndex: 1, value: "three" },
    { columnIndex: 1, rowIndex: 1, value: "four" },
  ];

  it("should parse the raw data to cell instances", () => {
    const sut = CellBuilder.build(data);

    expect(sut).toEqual(expected);
  });
});
