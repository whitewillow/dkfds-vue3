import { FdsOptionItem } from "dkfds-vue3-utils";
declare const _default: import("vue").DefineComponent<{
    id: {
        type: StringConstructor;
        default: any;
    };
    modelValue: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    /**
     * Første option - default: Vælg
     * */
    optionHeader: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Dropdown options / valgmuligheder
     * */
    options: {
        type: () => Array<FdsOptionItem>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue" | "dirty")[], "change" | "update:modelValue" | "dirty", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: any;
    };
    modelValue: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    /**
     * Første option - default: Vælg
     * */
    optionHeader: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Dropdown options / valgmuligheder
     * */
    options: {
        type: () => Array<FdsOptionItem>;
    };
}>> & {
    onChange?: (...args: any[]) => any;
    "onUpdate:modelValue"?: (...args: any[]) => any;
    onDirty?: (...args: any[]) => any;
}, {
    id: string;
    modelValue: string;
    optionHeader: string;
}>;
export default _default;
