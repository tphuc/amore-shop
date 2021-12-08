import React from 'react';
import { TableColumnRender, TableDataItemBase } from "./table-types";
export declare type TableColumnProps<TableDataItem> = {
    prop: keyof TableDataItem;
    label?: string;
    width?: number;
    className?: string;
    render?: TableColumnRender<TableDataItem>;
};
declare const TableColumn: {
    <TableDataItem extends TableDataItemBase>(columnProps: React.PropsWithChildren<TableColumnProps<TableDataItem>>): null;
    defaultProps: {
        className: string;
        render: () => void;
    };
    displayName: string;
};
export default TableColumn;
