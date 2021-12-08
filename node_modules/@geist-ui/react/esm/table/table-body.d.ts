import React from 'react';
import { TableDataItemBase, TableOnCellClick, TableOnRowClick, TableRowClassNameHandler } from "./table-types";
interface Props<TableDataItem extends TableDataItemBase> {
    hover: boolean;
    emptyText: string;
    onRow?: TableOnRowClick<TableDataItem>;
    onCell?: TableOnCellClick<TableDataItem>;
    data: Array<TableDataItem>;
    className?: string;
    rowClassName: TableRowClassNameHandler<TableDataItem>;
}
declare const defaultProps: {
    className: string;
};
declare type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props<any>>;
export declare type TableBodyProps<TableDataItem> = Props<TableDataItem> & NativeAttrs;
declare const TableBody: {
    <TableDataItem extends TableDataItemBase>({ data, hover, emptyText, onRow, onCell, rowClassName, }: Props<TableDataItem> & NativeAttrs & {
        className: string;
    }): JSX.Element;
    defaultProps: {
        className: string;
    };
    displayName: string;
};
export default TableBody;
