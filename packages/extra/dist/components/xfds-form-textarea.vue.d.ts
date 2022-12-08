declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: StringConstructor;
        default: string;
        required: true;
    };
    id: {
        type: StringConstructor;
        default: any;
    };
    rows: {
        type: NumberConstructor;
        default: number;
    };
    rowlength: {
        type: NumberConstructor;
        default: number;
    };
    maxlength: {
        type: NumberConstructor;
        default: number;
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
        type: StringConstructor;
        default: string;
        required: true;
    };
    id: {
        type: StringConstructor;
        default: any;
    };
    rows: {
        type: NumberConstructor;
        default: number;
    };
    rowlength: {
        type: NumberConstructor;
        default: number;
    };
    maxlength: {
        type: NumberConstructor;
        default: number;
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
    id: string;
    label: string;
    tooltip: string;
    maxlength: number;
    modelValue: string;
    hint: string;
    isValid: boolean;
    errorMessage: string;
    rows: number;
    rowlength: number;
}>;
export default _default;
