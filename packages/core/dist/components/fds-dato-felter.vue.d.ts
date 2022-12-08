declare const _default: import("vue").DefineComponent<{
    id: {
        type: StringConstructor;
    };
    modelValue: {
        type: StringConstructor;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "dirty" | "valid")[], "update:modelValue" | "dirty" | "valid", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    id: {
        type: StringConstructor;
    };
    modelValue: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
    onDirty?: (...args: any[]) => any;
    onValid?: (...args: any[]) => any;
}, {
    modelValue: string;
}>;
export default _default;
