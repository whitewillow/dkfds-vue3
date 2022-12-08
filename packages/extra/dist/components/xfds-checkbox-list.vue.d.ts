import { PropType } from "vue";
import { FdsCheckboxItem } from "dkfds-vue3-utils";
declare const _default: import("vue").DefineComponent<{
    id: {
        type: StringConstructor;
        default: any;
    };
    modelValue: {
        type: PropType<FdsCheckboxItem[]>;
        required: true;
        default: () => any[];
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "dirty")[], "update:modelValue" | "dirty", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: any;
    };
    modelValue: {
        type: PropType<FdsCheckboxItem[]>;
        required: true;
        default: () => any[];
    };
}>> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
    onDirty?: (...args: any[]) => any;
}, {
    id: string;
    modelValue: FdsCheckboxItem[];
}>;
export default _default;
