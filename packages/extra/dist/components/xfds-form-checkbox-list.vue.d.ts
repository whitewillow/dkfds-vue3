import { FdsCheckboxItem } from "dkfds-vue3-utils";
import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: PropType<FdsCheckboxItem[]>;
        required: true;
        default: () => any[];
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
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("input" | "update:modelValue" | "dirty" | "valid")[], "input" | "update:modelValue" | "dirty" | "valid", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: PropType<FdsCheckboxItem[]>;
        required: true;
        default: () => any[];
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
}>> & {
    onInput?: (...args: any[]) => any;
    "onUpdate:modelValue"?: (...args: any[]) => any;
    onDirty?: (...args: any[]) => any;
    onValid?: (...args: any[]) => any;
}, {
    label: string;
    tooltip: string;
    modelValue: FdsCheckboxItem[];
    hint: string;
    isValid: boolean;
    errorMessage: string;
}>;
export default _default;
