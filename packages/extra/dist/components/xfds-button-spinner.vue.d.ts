/**
 *
 * Komponent for knap med spinner
 * Umiddelbart ikke en del FDS
 * https://designsystem.dk/komponenter/knapper/
 *
 * */
import { PropType } from "vue";
import { FdsVariantEnum } from "dkfds-vue3-utils";
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            icon: string;
            variant: string;
            showSpinner: boolean;
            spinnerText: string;
            useoverlay: boolean;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            /**
             * Visnings variant
             * */
            variant: {
                type: PropType<string>;
                default: () => FdsVariantEnum;
            };
            /**
             * Vis spinner
             * */
            showSpinner: {
                type: BooleanConstructor;
                default: boolean;
            };
            /**
             * Spinner tekst - erstatter alm tekst
             * */
            spinnerText: {
                type: StringConstructor;
                default: any;
            };
            /**
             * Ikon som string
             * */
            icon: {
                type: StringConstructor;
                default: any;
            };
            /**
             * Tilføjer overlay når showSpinner, ikke muligt at klikke andre steder imens
             * */
            useoverlay: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & {
            onClick?: (...args: any[]) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "icon" | "variant" | "showSpinner" | "spinnerText" | "useoverlay">;
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
        $emit: (event: "click", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            /**
             * Visnings variant
             * */
            variant: {
                type: PropType<string>;
                default: () => FdsVariantEnum;
            };
            /**
             * Vis spinner
             * */
            showSpinner: {
                type: BooleanConstructor;
                default: boolean;
            };
            /**
             * Spinner tekst - erstatter alm tekst
             * */
            spinnerText: {
                type: StringConstructor;
                default: any;
            };
            /**
             * Ikon som string
             * */
            icon: {
                type: StringConstructor;
                default: any;
            };
            /**
             * Tilføjer overlay når showSpinner, ikke muligt at klikke andre steder imens
             * */
            useoverlay: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & {
            onClick?: (...args: any[]) => any;
        }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], string, {
            icon: string;
            variant: string;
            showSpinner: boolean;
            spinnerText: string;
            useoverlay: boolean;
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
         * Visnings variant
         * */
        variant: {
            type: PropType<string>;
            default: () => FdsVariantEnum;
        };
        /**
         * Vis spinner
         * */
        showSpinner: {
            type: BooleanConstructor;
            default: boolean;
        };
        /**
         * Spinner tekst - erstatter alm tekst
         * */
        spinnerText: {
            type: StringConstructor;
            default: any;
        };
        /**
         * Ikon som string
         * */
        icon: {
            type: StringConstructor;
            default: any;
        };
        /**
         * Tilføjer overlay når showSpinner, ikke muligt at klikke andre steder imens
         * */
        useoverlay: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & {
        onClick?: (...args: any[]) => any;
    } & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    /**
     * Visnings variant
     * */
    variant: {
        type: PropType<string>;
        default: () => FdsVariantEnum;
    };
    /**
     * Vis spinner
     * */
    showSpinner: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Spinner tekst - erstatter alm tekst
     * */
    spinnerText: {
        type: StringConstructor;
        default: any;
    };
    /**
     * Ikon som string
     * */
    icon: {
        type: StringConstructor;
        default: any;
    };
    /**
     * Tilføjer overlay når showSpinner, ikke muligt at klikke andre steder imens
     * */
    useoverlay: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onClick?: (...args: any[]) => any;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", {
    icon: string;
    variant: string;
    showSpinner: boolean;
    spinnerText: string;
    useoverlay: boolean;
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
});
export default _default;
