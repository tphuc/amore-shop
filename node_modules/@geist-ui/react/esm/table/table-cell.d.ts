import React from 'react';
import { TableDataItemBase, TableAbstractColumn, TableOnCellClick } from "./table-types";
interface Props<TableDataItem extends TableDataItemBase> {
    columns: Array<TableAbstractColumn<TableDataItem>>;
    row: TableDataItem;
    rowIndex: number;
    emptyText: string;
    onCellClick?: TableOnCellClick<TableDataItem>;
}
export declare type TableCellData<TableDataItem> = {
    row: number;
    column: number;
    rowValue: TableDataItem;
};
declare type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props<any>>;
export declare type TableCellProps<TableDataItem extends TableDataItemBase> = Props<TableDataItem> & NativeAttrs;
declare const TableCell: <TableDataItem extends TableDataItemBase>({ columns, row, rowIndex, emptyText, onCellClick, }: TableCellProps<TableDataItem>) => JSX.Element;
export default TableCell;
