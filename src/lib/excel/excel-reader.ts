import * as fs from "fs/promises";
import * as xlsx from "node-xlsx";
import * as path from "path";

class ExcelReader {
  static validFileExtensions = [".xlsx", ".xlsm", ".xlsb", ".xltx", ".xls"];

  static async read(filepath: string): Promise<string[][]> {
    const resolvedPath = path.resolve(filepath);

    if (!this.isValidExcelFile(filepath))
      throw new Error("Invalid file. The file should be an excel file.");

    const buffer = await fs.readFile(resolvedPath);

    const rawData = xlsx.parse(buffer)[0].data;

    return rawData as string[][];
  }

  static isValidExcelFile(filepath: string) {
    const fileExtension = path.extname(filepath).toLowerCase();

    return this.validFileExtensions.includes(fileExtension);
  }
}

export { ExcelReader };
