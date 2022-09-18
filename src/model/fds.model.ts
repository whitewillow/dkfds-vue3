// eslint-disable-next-line import/no-extraneous-dependencies
import { RouteLocationRaw } from 'vue-router';

export enum FdsVariantEnum {
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
  info = 'info',
  success = 'success',
  warning = 'warning',
  error = 'error',
}

export interface FdsOptionItem {
  title: string;
  value: string;
}

export interface FdsRadioItem {
  title: string;
  value: string;
  disabled?: boolean;
}
export interface FdsCheckboxItem {
  title: string;
  value: string;
  checked?: boolean;
  disabled?: boolean;
}

export interface FdsErrorListItem {
  anchor: string;
  text: string;
  target: string; // hvad skal den
}

export interface FdsFileModel {
  id: string;
  filnavn: string;
  label?: string;
  type: string;
}
export interface FdsFileInputModel {
  filnavn: string;
  type: string;
  size: number;
  data: string;
}

export interface FdsNavigationStep {
  order: number;
  key: string;
  title: string;
  help: string;
  done: boolean;
  active: boolean;
  disabled?: boolean;
  ignore?: boolean;
  to?: RouteLocationRaw;
}