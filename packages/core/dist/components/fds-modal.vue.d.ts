/**
 *
 * Komponent for Modal
 * https://designsystem.dk/komponenter/modal/
 *
 * OMSKREVET til at bruge https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
 *
 * Måske kigge på https://css-tricks.com/replace-javascript-dialogs-html-dialog-element/
 * */
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            closeable: boolean;
            acceptText: string;
            cancelText: string;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            header: {
                type: StringConstructor;
            };
            id: {
                type: StringConstructor;
            };
            closeable: {
                type: BooleanConstructor;
                default: boolean;
            };
            acceptText: {
                type: StringConstructor;
                default: string;
            };
            cancelText: {
                type: StringConstructor;
                default: string;
            };
        }>> & {
            onClose?: (...args: any[]) => any;
            onCancel?: (...args: any[]) => any;
            onAccept?: (...args: any[]) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "closeable" | "acceptText" | "cancelText">;
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
        $emit: (event: "cancel" | "close" | "accept", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            header: {
                type: StringConstructor;
            };
            id: {
                type: StringConstructor;
            };
            closeable: {
                type: BooleanConstructor;
                default: boolean;
            };
            acceptText: {
                type: StringConstructor;
                default: string;
            };
            cancelText: {
                type: StringConstructor;
                default: string;
            };
        }>> & {
            onClose?: (...args: any[]) => any;
            onCancel?: (...args: any[]) => any;
            onAccept?: (...args: any[]) => any;
        }, {
            hideModal: () => void;
            showModal: () => void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("cancel" | "close" | "accept")[], string, {
            closeable: boolean;
            acceptText: string;
            cancelText: string;
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
        header: {
            type: StringConstructor;
        };
        id: {
            type: StringConstructor;
        };
        closeable: {
            type: BooleanConstructor;
            default: boolean;
        };
        acceptText: {
            type: StringConstructor;
            default: string;
        };
        cancelText: {
            type: StringConstructor;
            default: string;
        };
    }>> & {
        onClose?: (...args: any[]) => any;
        onCancel?: (...args: any[]) => any;
        onAccept?: (...args: any[]) => any;
    } & import("vue").ShallowUnwrapRef<{
        hideModal: () => void;
        showModal: () => void;
    }> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    header: {
        type: StringConstructor;
    };
    id: {
        type: StringConstructor;
    };
    closeable: {
        type: BooleanConstructor;
        default: boolean;
    };
    acceptText: {
        type: StringConstructor;
        default: string;
    };
    cancelText: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    onClose?: (...args: any[]) => any;
    onCancel?: (...args: any[]) => any;
    onAccept?: (...args: any[]) => any;
}, {
    hideModal: () => void;
    showModal: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("cancel" | "close" | "accept")[], "cancel" | "close" | "accept", {
    closeable: boolean;
    acceptText: string;
    cancelText: string;
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        header: (_: {}) => any;
        default: (_: {}) => any;
        footer: (_: {}) => any;
    };
});
export default _default;
