declare const _default: import("vue").DefineComponent<{
    id: {
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
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("input" | "update:modelValue" | "dirty")[], "input" | "update:modelValue" | "dirty", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    id: {
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
}, {
    id: string;
    prefix: string;
    modelValue: number;
    suffix: string;
}>;
export default _default;
