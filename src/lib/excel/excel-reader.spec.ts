import { describe, expect, it } from "@jest/globals";
import { ExcelReader } from "./excel-reader";

describe("Lib/Excel/ExcelReader", () => {
  it("should check if file is a excel file", () => {
    expect(ExcelReader.isValidExcelFile("file.xlsx")).toBeTruthy();
    expect(ExcelReader.isValidExcelFile("file.xlsm")).toBeTruthy();
    expect(ExcelReader.isValidExcelFile("file.xlsb")).toBeTruthy();
    expect(ExcelReader.isValidExcelFile("file.xltx")).toBeTruthy();
    expect(ExcelReader.isValidExcelFile("file.xls")).toBeTruthy();

    expect(ExcelReader.isValidExcelFile("file.ppt")).toBeFalsy();
  });

  it("should throw a error if the file is not a excel file", () => {
    const filepath = "./src/data/excel.xsx";

    const sut = ExcelReader.read(filepath);

    expect(sut).rejects.toBeInstanceOf(Error);
  });
});
