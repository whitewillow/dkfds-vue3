/**
 *
 * Komponent til Besked
 * https://designsystem.dk/komponenter/beskeder/
 *
 * */
import { PropType } from 'vue';
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            header: string;
            variant: "error" | "success" | "warning" | "info";
            showIcon: boolean;
            closeable: boolean;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            /**
             *  Overskrift
             * */
            header: {
                type: StringConstructor;
                default: any;
            };
            /**
             * Type af besked
             * */
            variant: {
                type: PropType<"error" | "success" | "warning" | "info">;
                default: string;
            };
            /**
             * Vis venstrestillet ikon
             * */
            showIcon: {
                type: BooleanConstructor;
                default: boolean;
            };
            /**
             *  Klik for at lukke/fjerne besked
             * */
            closeable: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & {
            onClose?: (...args: any[]) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "header" | "variant" | "showIcon" | "closeable">;
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
        $emit: (event: "close", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            /**
             *  Overskrift
             * */
            header: {
                type: StringConstructor;
                default: any;
            };
            /**
             * Type af besked
             * */
            variant: {
                type: PropType<"error" | "success" | "warning" | "info">;
                default: string;
            };
            /**
             * Vis venstrestillet ikon
             * */
            showIcon: {
                type: BooleanConstructor;
                default: boolean;
            };
            /**
             *  Klik for at lukke/fjerne besked
             * */
            closeable: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & {
            onClose?: (...args: any[]) => any;
        }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "close"[], string, {
            header: string;
            variant: "error" | "success" | "warning" | "info";
            showIcon: boolean;
            closeable: boolean;
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
        /**
         *  Overskrift
         * */
        header: {
            type: StringConstructor;
            default: any;
        };
        /**
         * Type af besked
         * */
        variant: {
            type: PropType<"error" | "success" | "warning" | "info">;
            default: string;
        };
        /**
         * Vis venstrestillet ikon
         * */
        showIcon: {
            type: BooleanConstructor;
            default: boolean;
        };
        /**
         *  Klik for at lukke/fjerne besked
         * */
        closeable: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & {
        onClose?: (...args: any[]) => any;
    } & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    /**
     *  Overskrift
     * */
    header: {
        type: StringConstructor;
        default: any;
    };
    /**
     * Type af besked
     * */
    variant: {
        type: PropType<"error" | "success" | "warning" | "info">;
        default: string;
    };
    /**
     * Vis venstrestillet ikon
     * */
    showIcon: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     *  Klik for at lukke/fjerne besked
     * */
    closeable: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onClose?: (...args: any[]) => any;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "close"[], "close", {
    header: string;
    variant: "error" | "success" | "warning" | "info";
    showIcon: boolean;
    closeable: boolean;
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        header: (_: {}) => any;
        default: (_: {}) => any;
        button: (_: {}) => any;
    };
});
export default _default;
