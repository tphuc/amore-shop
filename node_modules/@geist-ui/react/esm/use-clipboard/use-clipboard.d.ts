export declare type UseClipboardOptions = {
    onError: () => unknown;
};
export declare type UseClipboardResult = {
    copy: (text: string) => void;
};
declare const useClipboard: (options?: UseClipboardOptions) => UseClipboardResult;
export default useClipboard;
