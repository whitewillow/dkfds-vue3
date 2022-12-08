import { PropType } from "vue";
import { FdsOptionItem } from "dkfds-vue3-utils";
declare const _default: import("vue").DefineComponent<{
    id: {
        type: StringConstructor;
        default: any;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    hint: {
        type: StringConstructor;
        default: string;
    };
    tooltip: {
        type: StringConstructor;
        default: any;
    };
    isValid: {
        type: BooleanConstructor;
        default: boolean;
    };
    errorMessage: {
        type: StringConstructor;
        default: any;
    };
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    options: {
        type: PropType<FdsOptionItem[]>;
        default: () => any[];
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("input" | "update:modelValue" | "dirty" | "valid")[], "input" | "update:modelValue" | "dirty" | "valid", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: any;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    hint: {
        type: StringConstructor;
        default: string;
    };
    tooltip: {
        type: StringConstructor;
        default: any;
    };
    isValid: {
        type: BooleanConstructor;
        default: boolean;
    };
    errorMessage: {
        type: StringConstructor;
        default: any;
    };
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    options: {
        type: PropType<FdsOptionItem[]>;
        default: () => any[];
    };
}>> & {
    onInput?: (...args: any[]) => any;
    "onUpdate:modelValue"?: (...args: any[]) => any;
    onDirty?: (...args: any[]) => any;
    onValid?: (...args: any[]) => any;
}, {
    id: string;
    label: string;
    options: FdsOptionItem[];
    tooltip: string;
    modelValue: string;
    hint: string;
    isValid: boolean;
    errorMessage: string;
}>;
export default _default;
