declare const _default: import("vue").DefineComponent<{
    id: {
        type: StringConstructor;
        default: any;
    };
    modelValue: {
        default: number;
    };
    min: {
        type: NumberConstructor;
        default: number;
    };
    max: {
        type: NumberConstructor;
        default: number;
    };
    step: {
        type: NumberConstructor;
        default: number;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("input" | "update:modelValue" | "dirty")[], "input" | "update:modelValue" | "dirty", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: any;
    };
    modelValue: {
        default: number;
    };
    min: {
        type: NumberConstructor;
        default: number;
    };
    max: {
        type: NumberConstructor;
        default: number;
    };
    step: {
        type: NumberConstructor;
        default: number;
    };
}>> & {
    onInput?: (...args: any[]) => any;
    "onUpdate:modelValue"?: (...args: any[]) => any;
    onDirty?: (...args: any[]) => any;
}, {
    max: number;
    id: string;
    step: number;
    min: number;
    modelValue: number;
}>;
export default _default;
