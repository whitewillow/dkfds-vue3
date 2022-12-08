import { FdsNavigationItem } from "dkfds-vue3-utils";
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: () => Array<FdsNavigationItem>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("navigate" | "update:modelValue")[], "navigate" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: () => Array<FdsNavigationItem>;
        required: true;
    };
}>> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
    onNavigate?: (...args: any[]) => any;
}, {}>;
export default _default;
