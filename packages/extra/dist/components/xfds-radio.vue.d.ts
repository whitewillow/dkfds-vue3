import { PropType } from "vue";
import { FdsOptionItem } from "dkfds-vue3-utils";
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            id: string;
            list: FdsOptionItem[];
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            modelValue: {
                type: StringConstructor;
            };
            list: {
                type: PropType<FdsOptionItem[]>;
                required: true;
                default: () => any[];
            };
            id: {
                type: StringConstructor;
                default: any;
            };
            label: {
                type: StringConstructor;
                required: true;
                validator(value: string): boolean;
            };
        }>> & {
            "onUpdate:modelValue"?: (...args: any[]) => any;
            onDirty?: (...args: any[]) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "id" | "list">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}>;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}>;
        $emit: (event: "update:modelValue" | "dirty", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            modelValue: {
                type: StringConstructor;
            };
            list: {
                type: PropType<FdsOptionItem[]>;
                required: true;
                default: () => any[];
            };
            id: {
                type: StringConstructor;
                default: any;
            };
            label: {
                type: StringConstructor;
                required: true;
                validator(value: string): boolean;
            };
        }>> & {
            "onUpdate:modelValue"?: (...args: any[]) => any;
            onDirty?: (...args: any[]) => any;
        }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "dirty")[], string, {
            id: string;
            list: FdsOptionItem[];
        }, {}, string> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}>, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}>, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: StringConstructor;
        };
        list: {
            type: PropType<FdsOptionItem[]>;
            required: true;
            default: () => any[];
        };
        id: {
            type: StringConstructor;
            default: any;
        };
        label: {
            type: StringConstructor;
            required: true;
            validator(value: string): boolean;
        };
    }>> & {
        "onUpdate:modelValue"?: (...args: any[]) => any;
        onDirty?: (...args: any[]) => any;
    } & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: StringConstructor;
    };
    list: {
        type: PropType<FdsOptionItem[]>;
        required: true;
        default: () => any[];
    };
    id: {
        type: StringConstructor;
        default: any;
    };
    label: {
        type: StringConstructor;
        required: true;
        validator(value: string): boolean;
    };
}>> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
    onDirty?: (...args: any[]) => any;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "dirty")[], "update:modelValue" | "dirty", {
    id: string;
    list: FdsOptionItem[];
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: Record<string, {
        radiovalue: string;
    }> & {
        label: (_: {}) => any;
    };
});
export default _default;
