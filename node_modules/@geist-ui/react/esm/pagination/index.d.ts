import Pagination from "./pagination";
import PaginationPrevious from "./pagination-previous";
import PaginationNext from "./pagination-next";
export declare type PaginationComponentType = typeof Pagination & {
    Previous: typeof PaginationPrevious;
    Next: typeof PaginationNext;
};
export type { PaginationProps } from "./pagination";
export type { PaginationPreviousProps } from "./pagination-previous";
export type { PaginationNextProps } from "./pagination-next";
declare const _default: PaginationComponentType;
export default _default;
