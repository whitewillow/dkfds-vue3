// import sortby from 'lodash.sortby';

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
  validatorItems: ValidatorItem[] = [];

  clear() {
    this.validatorItems = [];
  }

  removeItem(key: string) {
    this.validatorItems = this.validatorItems.filter((f) => f.key !== key);
  }

  removeItemsByType(type: string) {
    this.validatorItems = this.validatorItems.filter((f) => f.type !== type);
  }

  addItem(validatorItem: ValidatorItem): void {
    this.validatorItems = this.validatorItems.filter((f) => f.key !== validatorItem.key);
    this.validatorItems.push(validatorItem);
  }

  addItems(validatorSet: ValidatorItem[]): void {
    const mKeys = validatorSet.map((m) => m.key);
    this.validatorItems = this.validatorItems.filter((f) => !mKeys.includes(f.key));
    // this.validatorItems = sortby([...this.validatorItems, ...validatorSet], 'key');
  }

  getItem(key: string, type: string): ValidatorItem | undefined {
    return this.validatorItems.find((f) => f.key === key && f.type === type);
  }

  getUnvalidItems(): ValidatorItem[] {
    return this.validatorItems.filter((f) => !f.valid);
  }

  getUnvalidItemsReasonsByKey(key: string): string[] {
    return this.validatorItems
      .filter((f) => !f.valid && f.key === key)
      .flatMap((m) => m.reasons ?? []);
  }

  exists(key: string): boolean {
    return this.validatorItems.find((f) => f.key === key) !== undefined;
  }

  isValid(key: string): boolean {
    return this.validatorItems.find((f) => f.key === key)?.valid ?? false;
  }

  isEveryValid(): boolean {
    return this.validatorItems.every((f) => f.valid);
  }
}
