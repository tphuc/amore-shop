import React from 'react';
export declare type TableDataItemBase = Record<string, any>;
export declare type TableColumnRender<Item extends TableDataItemBase> = (value: Item[keyof Item], rowData: Item, rowIndex: number) => JSX.Element | void;
export declare type TableAbstractColumn<TableDataItem> = {
    prop: keyof TableDataItem;
    label: React.ReactNode | string;
    className: string;
    width?: number;
    renderHandler: TableColumnRender<TableDataItem>;
};
export declare type TableOnRowClick<TableDataItem> = (rowData: TableDataItem, rowIndex: number) => void;
export declare type TableOnCellClick<TableDataItem> = (cellValue: TableDataItem[keyof TableDataItem], rowIndex: number, colunmIndex: number) => void;
export declare type TableOnChange<TableDataItem> = (data: Array<TableDataItem>) => void;
export declare type TableRowClassNameHandler<TableDataItem> = (rowData: TableDataItem, rowIndex: number) => string;
