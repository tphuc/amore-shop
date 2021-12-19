import React from 'react';
import { TableAbstractColumn } from "./table-types";
export interface TableConfig<T> {
    columns: Array<TableAbstractColumn<T>>;
    updateColumn: (column: TableAbstractColumn<T>) => void;
}
export declare const TableContext: React.Context<TableConfig<any>>;
export declare const useTableContext: <T>() => TableConfig<T>;
