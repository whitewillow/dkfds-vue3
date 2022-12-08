import { FdsNavigationItem } from "dkfds-vue3-utils";
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: () => Array<FdsNavigationItem>;
        default: () => any[];
        required: true;
    };
    showIndex: {
        type: BooleanConstructor;
        default: boolean;
    };
    navigateFirst: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("navigate" | "update:modelValue")[], "navigate" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: () => Array<FdsNavigationItem>;
        default: () => any[];
        required: true;
    };
    showIndex: {
        type: BooleanConstructor;
        default: boolean;
    };
    navigateFirst: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
    onNavigate?: (...args: any[]) => any;
}, {
    modelValue: FdsNavigationItem[];
    showIndex: boolean;
    navigateFirst: boolean;
}>;
export default _default;
