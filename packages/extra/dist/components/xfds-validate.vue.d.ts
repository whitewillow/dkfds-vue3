declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            id: string;
            dirty: boolean;
            modelValue: string | number | unknown[];
            validateFlow: string;
            useAutoDirty: boolean;
            validations: ((x?: unknown) => string | null)[];
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            modelValue: {
                type: (StringConstructor | NumberConstructor | ArrayConstructor)[];
                default: any;
            };
            id: {
                type: StringConstructor;
                default: any;
            };
            validateFlow: {
                type: StringConstructor;
                default: string;
            };
            dirty: {
                type: BooleanConstructor;
                default: boolean;
            };
            useAutoDirty: {
                type: BooleanConstructor;
                default: boolean;
            };
            validations: {
                type: () => ((x?: unknown) => string | null)[];
                default: () => ((input: unknown) => "Indtast data")[];
            };
        }>> & {
            onValid?: (...args: any[]) => any;
            onValidated?: (...args: any[]) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "id" | "dirty" | "modelValue" | "validateFlow" | "useAutoDirty" | "validations">;
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
        $emit: (event: "valid" | "validated", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            modelValue: {
                type: (StringConstructor | NumberConstructor | ArrayConstructor)[];
                default: any;
            };
            id: {
                type: StringConstructor;
                default: any;
            };
            validateFlow: {
                type: StringConstructor;
                default: string;
            };
            dirty: {
                type: BooleanConstructor;
                default: boolean;
            };
            useAutoDirty: {
                type: BooleanConstructor;
                default: boolean;
            };
            validations: {
                type: () => ((x?: unknown) => string | null)[];
                default: () => ((input: unknown) => "Indtast data")[];
            };
        }>> & {
            onValid?: (...args: any[]) => any;
            onValidated?: (...args: any[]) => any;
        }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("valid" | "validated")[], string, {
            id: string;
            dirty: boolean;
            modelValue: string | number | unknown[];
            validateFlow: string;
            useAutoDirty: boolean;
            validations: ((x?: unknown) => string | null)[];
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
            type: (StringConstructor | NumberConstructor | ArrayConstructor)[];
            default: any;
        };
        id: {
            type: StringConstructor;
            default: any;
        };
        validateFlow: {
            type: StringConstructor;
            default: string;
        };
        dirty: {
            type: BooleanConstructor;
            default: boolean;
        };
        useAutoDirty: {
            type: BooleanConstructor;
            default: boolean;
        };
        validations: {
            type: () => ((x?: unknown) => string | null)[];
            default: () => ((input: unknown) => "Indtast data")[];
        };
    }>> & {
        onValid?: (...args: any[]) => any;
        onValidated?: (...args: any[]) => any;
    } & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (StringConstructor | NumberConstructor | ArrayConstructor)[];
        default: any;
    };
    id: {
        type: StringConstructor;
        default: any;
    };
    validateFlow: {
        type: StringConstructor;
        default: string;
    };
    dirty: {
        type: BooleanConstructor;
        default: boolean;
    };
    useAutoDirty: {
        type: BooleanConstructor;
        default: boolean;
    };
    validations: {
        type: () => ((x?: unknown) => string | null)[];
        default: () => ((input: unknown) => "Indtast data")[];
    };
}>> & {
    onValid?: (...args: any[]) => any;
    onValidated?: (...args: any[]) => any;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("valid" | "validated")[], "valid" | "validated", {
    id: string;
    dirty: boolean;
    modelValue: string | number | unknown[];
    validateFlow: string;
    useAutoDirty: boolean;
    validations: ((x?: unknown) => string | null)[];
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {
            isValid: boolean;
            isValidWaitForDirty: boolean;
            errorMessage: string;
        }) => any;
    };
});
export default _default;
