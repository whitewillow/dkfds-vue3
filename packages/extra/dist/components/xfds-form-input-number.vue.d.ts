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
        default: number;
    };
    suffix: {
        type: StringConstructor;
        default: any;
    };
    prefix: {
        type: StringConstructor;
        default: any;
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
        default: number;
    };
    suffix: {
        type: StringConstructor;
        default: any;
    };
    prefix: {
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
    prefix: string;
    tooltip: string;
    modelValue: number;
    hint: string;
    isValid: boolean;
    errorMessage: string;
    suffix: string;
}>;
export default _default;
