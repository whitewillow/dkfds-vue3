import { FdsLanguageItem } from "dkfds-vue3-utils";
import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: PropType<FdsLanguageItem[]>;
        required: true;
        default: () => any[];
    };
    autoSetLang: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "lang")[], "lang" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: PropType<FdsLanguageItem[]>;
        required: true;
        default: () => any[];
    };
    autoSetLang: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
    onLang?: (...args: any[]) => any;
}, {
    modelValue: FdsLanguageItem[];
    autoSetLang: boolean;
}>;
export default _default;
