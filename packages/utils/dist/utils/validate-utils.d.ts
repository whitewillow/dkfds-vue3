/**
 * Loop through functions, first returning a string will be returned otherwise null if no errors
 * @param functions an array of validation methods
 * @returns string = error | null = no errors
 */
export declare function validateAllErrorMessage(...functions: Array<(x?: unknown) => string | null>): (x: unknown) => string[];
export declare function numberMax(max: number): (args: number) => string | null;
export declare function numberMin(min: number): (args: number) => string | null;
export declare function charactersMaxLength(length: number): (args: string) => string | null;
export declare function charactersMinLength(length: number): (args: string) => string | null;
export declare function charactersEqualsLength(length: number, type?: string): (args: string) => string | null;
export declare function validCVR(x: string): string | null;
export declare function validCPR(x: string): string | null;
export declare function validSagsnummer(x: string): string | null;
export declare function hasContent(x: string): string | null;
export declare function validEmail(x: string): string | null;
export declare function noSpace(x: string): string | null;
export declare function notEmpty(...arg: string[]): boolean;
export declare function arrayHasItems(x: unknown): string | null;
