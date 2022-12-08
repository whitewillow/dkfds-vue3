export interface ValidatorItem {
    key: string;
    type: string;
    reasons?: string[];
    valid: boolean;
    dirty: boolean;
}
/**
 * En måde at holde styr på om "elementers" tilstand
 *
 */
export default class ValidatorService {
    validatorItems: ValidatorItem[];
    clear(): void;
    removeItem(key: string): void;
    removeItemsByType(type: string): void;
    addItem(validatorItem: ValidatorItem): void;
    addItems(validatorSet: ValidatorItem[]): void;
    getItem(key: string, type: string): ValidatorItem | undefined;
    getUnvalidItems(): ValidatorItem[];
    getUnvalidItemsReasonsByKey(key: string): string[];
    exists(key: string): boolean;
    isValid(key: string): boolean;
    isEveryValid(): boolean;
}
