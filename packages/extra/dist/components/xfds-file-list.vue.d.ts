import { PropType } from "vue";
import { FdsFileModel } from "dkfds-vue3-utils";
declare const _default: import("vue").DefineComponent<{
    list: {
        type: PropType<FdsFileModel[]>;
        required: true;
        default: () => any[];
    };
    icons: {
        type: PropType<Record<string, string>>;
        default: () => {
            pdf: string;
            image: string;
            doc: string;
            odt: string;
            xls: string;
        };
    };
    defaultIcon: {
        type: StringConstructor;
        default: string;
    };
    canDelete: {
        type: BooleanConstructor;
        default: boolean;
    };
    canDownload: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("delete" | "download")[], "delete" | "download", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    list: {
        type: PropType<FdsFileModel[]>;
        required: true;
        default: () => any[];
    };
    icons: {
        type: PropType<Record<string, string>>;
        default: () => {
            pdf: string;
            image: string;
            doc: string;
            odt: string;
            xls: string;
        };
    };
    defaultIcon: {
        type: StringConstructor;
        default: string;
    };
    canDelete: {
        type: BooleanConstructor;
        default: boolean;
    };
    canDownload: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onDelete?: (...args: any[]) => any;
    onDownload?: (...args: any[]) => any;
}, {
    list: FdsFileModel[];
    icons: Record<string, string>;
    defaultIcon: string;
    canDelete: boolean;
    canDownload: boolean;
}>;
export default _default;
