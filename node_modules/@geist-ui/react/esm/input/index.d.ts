import Input from "./input";
import Textarea from "../textarea";
import InputPassword from "./password";
export declare type InputComponentType = typeof Input & {
    Textarea: typeof Textarea;
    Password: typeof InputPassword;
};
export type { InputProps } from "./input";
export type { InputTypes } from "./input-props";
export type { InputPasswordProps } from "./password";
export type { TextareaProps } from "../textarea/textarea";
declare const _default: InputComponentType;
export default _default;
