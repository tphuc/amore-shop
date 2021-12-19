import React from 'react';
import { TableAbstractColumn, TableDataItemBase } from "./table-types";
interface Props<TableDataItem extends TableDataItemBase> {
    width: number;
    columns: Array<TableAbstractColumn<TableDataItem>>;
    className?: string;
}
declare type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props<any>>;
export declare type TableHeadProps<TableDataItem> = Props<TableDataItem> & NativeAttrs;
declare const TableHead: {
    <TableDataItem extends TableDataItemBase>(props: TableHeadProps<TableDataItem>): JSX.Element;
    defaultProps: {
        className: string;
    };
    displayName: string;
};
export default TableHead;
