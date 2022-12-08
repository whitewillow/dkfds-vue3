declare const _default: import("vue").DefineComponent<{
    id: {
        type: StringConstructor;
        default: any;
    };
    contenttypes: {
        type: () => Array<string>;
        default: () => string[];
    };
    removeContentHeaders: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("error" | "dirty" | "upload")[], "error" | "dirty" | "upload", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: any;
    };
    contenttypes: {
        type: () => Array<string>;
        default: () => string[];
    };
    removeContentHeaders: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onError?: (...args: any[]) => any;
    onDirty?: (...args: any[]) => any;
    onUpload?: (...args: any[]) => any;
}, {
    id: string;
    contenttypes: string[];
    removeContentHeaders: boolean;
}>;
export default _default;
