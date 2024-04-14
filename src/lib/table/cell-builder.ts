export interface Cell<T> {
  columnIndex: number;
  rowIndex: number;
  value: T;
}

export class CellBuilder {
  static build(data: any[][]) {
    const cells = data.flatMap((rowRawData, rowIndex) => {
      const parsedCells = rowRawData.map((cellValue, colIndex) =>
        CellBuilder.identifyCell(cellValue, colIndex, rowIndex),
      );

      return parsedCells;
    });

    return cells;
  }

  private static identifyCell<T>(value: T, columnIndex: number, rowIndex: number): Cell<T> {
    const cell: Cell<T> = { columnIndex, rowIndex, value };

    return cell;
  }
}
