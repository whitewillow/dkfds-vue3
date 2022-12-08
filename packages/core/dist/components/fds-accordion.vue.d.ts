import { PropType } from "vue";
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            expanded: boolean;
            hint: string;
            headerLevel: "h2" | "h3" | "h4" | "h5" | "h6";
            variant: "error" | "success" | "warning";
            variantText: string;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            /**
             * Overskrift
             * */
            header: {
                type: StringConstructor;
            };
            /**
             * Hjælpetekst
             * */
            hint: {
                type: StringConstructor;
                default: string;
            };
            /**
             * Er Accordion Åben = aktiv
             * */
            expanded: {
                type: BooleanConstructor;
                default: boolean;
            };
            headerLevel: {
                type: PropType<"h2" | "h3" | "h4" | "h5" | "h6">;
                default: string;
                validator(value: string): boolean;
            };
            /**
             * Variant - ikon der vises til højre
             * */
            variant: {
                type: PropType<"error" | "success" | "warning">;
                default: any;
            };
            /**
             * Tilhørende tekst til varianten
             * */
            variantText: {
                type: StringConstructor;
                default: string;
            };
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "expanded" | "hint" | "headerLevel" | "variant" | "variantText">;
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
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            /**
             * Overskrift
             * */
            header: {
                type: StringConstructor;
            };
            /**
             * Hjælpetekst
             * */
            hint: {
                type: StringConstructor;
                default: string;
            };
            /**
             * Er Accordion Åben = aktiv
             * */
            expanded: {
                type: BooleanConstructor;
                default: boolean;
            };
            headerLevel: {
                type: PropType<"h2" | "h3" | "h4" | "h5" | "h6">;
                default: string;
                validator(value: string): boolean;
            };
            /**
             * Variant - ikon der vises til højre
             * */
            variant: {
                type: PropType<"error" | "success" | "warning">;
                default: any;
            };
            /**
             * Tilhørende tekst til varianten
             * */
            variantText: {
                type: StringConstructor;
                default: string;
            };
        }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            expanded: boolean;
            hint: string;
            headerLevel: "h2" | "h3" | "h4" | "h5" | "h6";
            variant: "error" | "success" | "warning";
            variantText: string;
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
         * Overskrift
         * */
        header: {
            type: StringConstructor;
        };
        /**
         * Hjælpetekst
         * */
        hint: {
            type: StringConstructor;
            default: string;
        };
        /**
         * Er Accordion Åben = aktiv
         * */
        expanded: {
            type: BooleanConstructor;
            default: boolean;
        };
        headerLevel: {
            type: PropType<"h2" | "h3" | "h4" | "h5" | "h6">;
            default: string;
            validator(value: string): boolean;
        };
        /**
         * Variant - ikon der vises til højre
         * */
        variant: {
            type: PropType<"error" | "success" | "warning">;
            default: any;
        };
        /**
         * Tilhørende tekst til varianten
         * */
        variantText: {
            type: StringConstructor;
            default: string;
        };
    }>> & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    /**
     * Overskrift
     * */
    header: {
        type: StringConstructor;
    };
    /**
     * Hjælpetekst
     * */
    hint: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Er Accordion Åben = aktiv
     * */
    expanded: {
        type: BooleanConstructor;
        default: boolean;
    };
    headerLevel: {
        type: PropType<"h2" | "h3" | "h4" | "h5" | "h6">;
        default: string;
        validator(value: string): boolean;
    };
    /**
     * Variant - ikon der vises til højre
     * */
    variant: {
        type: PropType<"error" | "success" | "warning">;
        default: any;
    };
    /**
     * Tilhørende tekst til varianten
     * */
    variantText: {
        type: StringConstructor;
        default: string;
    };
}>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    expanded: boolean;
    hint: string;
    headerLevel: "h2" | "h3" | "h4" | "h5" | "h6";
    variant: "error" | "success" | "warning";
    variantText: string;
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        header: (_: {}) => any;
        default: (_: {}) => any;
    };
});
export default _default;
