export enum FdsVariantEnum {
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
  quaternary = 'quaternary',
  info = 'info',
  success = 'success',
  warning = 'warning',
  error = 'error',
}

/**
 * Used for radio, dropdowns
 */
export interface FdsOptionItem {
  title: string;
  value: string;
  disabled?: boolean;
  ariaDisabled?: boolean;
}

/**
 * Used for Checkbox
 */
export interface FdsCheckboxItem extends FdsOptionItem {
  checked?: boolean;
}

export interface FdsErrorListItem {
  anchor: string;
  text: string;
}

export interface FdsFileModel {
  id: string;
  filename: string;
  label?: string;
  type: string;
}
export interface FdsFileInputModel {
  filename: string;
  type: string;
  size: number;
  data: string;
}

export interface FdsNavigationItem {
  key: string;
  title: string;
  active: boolean; // currently selected
  disabled?: boolean; // not clickable
  hint: string; // help text
  icon?: string; // shows icon if any, eg. done
  ignore?: boolean; // item will be ignored (filtered out)
  href?: string;
  children?: Array<FdsNavigationItem>;
}

export interface FdsTabItem {
  key: string;
  title: string;
  active: boolean;
  disabled?: boolean;
  ignore?: boolean; // item will be ignored (filtered out)
}

export interface FdsLanguageItem {
  title: string;
  active: boolean;
  lang: string; // langauge key
  ariaLabel: string; // Valgt sprog: Dansk
}

export interface FdsPaging {
  index: number;
  dotted: boolean;
}
