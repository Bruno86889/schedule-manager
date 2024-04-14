import { describe, expect, it } from "@jest/globals";
import { Table } from "./table";

describe("Table", () => {
  const rawData = [
    ["one", "two"],
    ["three", "four"],
  ];

  it("should export table as a 2D array", () => {
    const table = new Table(rawData);

    const sut = table.exportRawData();

    expect(sut).toEqual(rawData);
  });

  it("should return a single cell when give the columnIndex and the rowIndex", () => {
    const table = new Table(rawData);

    const sut = table.getCell(0, 0);

    expect(sut).toEqual({ rowIndex: 0, columnIndex: 0, value: "one" });
  });

  it("should return a single row when give his index", () => {
    const table = new Table(rawData);

    const sut = table.getRow(0);

    expect(sut).toEqual([
      { rowIndex: 0, columnIndex: 0, value: "one" },
      { rowIndex: 0, columnIndex: 1, value: "two" },
    ]);
  });

  it("should return a single column when give his index", () => {
    const table = new Table(rawData);

    const sut = table.getColumn(0);

    expect(sut).toEqual([
      { rowIndex: 0, columnIndex: 0, value: "one" },
      { rowIndex: 1, columnIndex: 0, value: "three" },
    ]);
  });

  it("should return the number of columns", () => {
    const table = new Table(rawData);

    const sut = table.cols;

    expect(sut).toBe(2);
  });
  it("should return the number of rows", () => {
    const table = new Table(rawData);

    const sut = table.rows;

    expect(sut).toBe(2);
  });
});
