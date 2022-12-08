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
    maxRows: {
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
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("input" | "update:modelValue" | "dirty")[], "input" | "update:modelValue" | "dirty", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
    maxRows: {
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
}>> & {
    onInput?: (...args: any[]) => any;
    "onUpdate:modelValue"?: (...args: any[]) => any;
    onDirty?: (...args: any[]) => any;
}, {
    id: string;
    maxlength: number;
    modelValue: string;
    rows: number;
    maxRows: number;
    rowlength: number;
}>;
export default _default;
