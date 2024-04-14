import { groupBy } from "../group-by/group-by";
import { Cell, CellBuilder } from "./cell-builder";

export class Table {
  data: Cell<any>[];
  rows: number;
  cols: number;

  constructor(rawData?: any[][]) {
    const data = CellBuilder.build(rawData);

    this.cols = rawData[0].length;
    this.rows = rawData.length;

    this.data = data;
  }

  getCell(colIndex: number, rowIndex: number) {
    const foundCell = this.data.find(
      (cell) => cell.columnIndex == colIndex && cell.rowIndex == rowIndex,
    );

    return foundCell;
  }

  getRow(rowIndex: number) {
    return this.data.filter((cell) => cell.rowIndex === rowIndex);
  }

  getColumn(columnIndex: number) {
    return this.data.filter((cell) => cell.columnIndex === columnIndex);
  }

  exportRawData() {
    const rows = groupBy(this.data, (cell) => cell.rowIndex);

    return Object.values(rows).map((row) => row.map((cell) => cell.value));
  }
}
