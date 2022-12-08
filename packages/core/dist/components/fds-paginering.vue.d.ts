declare const _default: import("vue").DefineComponent<{
    list: {
        type: ArrayConstructor;
        default: () => any[];
    };
    skip: {
        type: NumberConstructor;
        default: number;
    };
    pageSize: {
        type: NumberConstructor;
        default: number;
    };
    maxElements: {
        type: NumberConstructor;
        default: number;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("filteredPage" | "skip")[], "filteredPage" | "skip", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    list: {
        type: ArrayConstructor;
        default: () => any[];
    };
    skip: {
        type: NumberConstructor;
        default: number;
    };
    pageSize: {
        type: NumberConstructor;
        default: number;
    };
    maxElements: {
        type: NumberConstructor;
        default: number;
    };
}>> & {
    onFilteredPage?: (...args: any[]) => any;
    onSkip?: (...args: any[]) => any;
}, {
    list: unknown[];
    skip: number;
    pageSize: number;
    maxElements: number;
}>;
export default _default;
