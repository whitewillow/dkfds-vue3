/**
 * Composable for getting formId if any
 * @param localId : eg. props.Id
 * @param autogenId : if true new id will be generated
 * @returns
 */
export default function getFormId(localId: string | undefined, autogenId?: boolean): {
    formid: import("vue").ComputedRef<any>;
};
