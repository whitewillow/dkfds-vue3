import { FdsCheckboxItem } from '../models/fds.model';

/**
 * Loop through functions, first returning a string will be returned otherwise null if no errors
 * @param functions an array of validation methods
 * @returns string = error | null = no errors
 */
export function validateAllErrorMessage(...functions: Array<(x?: unknown) => string | null>) {
  return (x: unknown) => {
    const messages = functions.map((f) => f(x)).filter((msg) => msg !== null) as string[];

    if (messages && messages.length > 0) {
      return messages;
    }
    return [];
  };
}

export function numberMax(max: number): (args: number) => string | null {
  return (x: number) => (x <= max ? null : `Feltet må overstige ${max}.`);
}
export function numberMin(min: number): (args: number) => string | null {
  return (x: number) => (x > min ? null : `Feltet må ikke være mindre end ${min}.`);
}

export function charactersMaxLength(length: number): (args: string) => string | null {
  return (x: string) =>
    x.length <= length ? null : `Feltet må ikke være længere end ${length} tegn.`;
}

export function charactersMinLength(length: number): (args: string) => string | null {
  return (x: string) =>
    x.length >= length ? null : `Feltet må ikke være kortere end ${length} tegn.`;
}

export function charactersEqualsLength(
  length: number,
  type = 'tegn',
): (args: string) => string | null {
  return (x) => (x.length === length ? null : `Feltet skal være nøjagtigt ${length} ${type}.`);
}

export function validCVR(x: string): string | null {
  const CVR_REGEXP = /^[1-9][0-9]{7}$/;
  const isValid = CVR_REGEXP.test(x);

  return isValid ? null : 'CVR nummer er ikke korrekt angivet';
}

export function validCPR(x: string): string | null {
  // eslint-disable-next-line max-len
  const CPR_REGEXP =
    /((?:(?:31(?:0[13578]|1[02])|(?:30|29)(?:0[13-9]|1[0-2])|(?:0[1-9]|1[0-9]|2[0-8])(?:0[1-9]|1[0-2]))[0-9]{2}|2902(?:[02468][048]|[13579][26])))-?[0-9]{4}/;
  const isValid = CPR_REGEXP.test(x);

  return isValid ? null : 'CPR nummer er ikke korrekt angivet';
}

export function validSagsnummer(x: string): string | null {
  const regex = RegExp(
    /^[AXB][0-9]{2}-[A-Z]{2}-[0-9]{2}-[A-Z]{2}(-[0-9]{2}$|-[0-9]{2}-[A-Z]{2})*$/ as unknown as string,
    'g',
  );
  const isValid = regex.test(x.toUpperCase());

  return isValid ? null : 'Sagsnummer ikke korrekt angivet';
}

export function hasContent(x: string): string | null {
  return x !== null && x.replace(/\s+/g, '').length > 0 ? null : 'Feltet må ikke være tomt.';
}

export function validEmail(x: string): string | null {
  const EMAIL_REGEXP = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  const isValid = EMAIL_REGEXP.test(x);

  return isValid ? null : 'Email er ikke korrekt angivet';
}

export function noSpace(x: string): string | null {
  return x.indexOf(' ') !== -1 ? 'Feltet må ikke har mellemrum.' : null;
}

export function notEmpty(...arg: string[]): boolean {
  return arg.every((e) => e.trim().length > 0);
}

export function arrayHasItems(x: unknown): string | null {
  if (!Array.isArray(x)) {
    return 'Ukendt indhold';
  }
  const a: Array<FdsCheckboxItem> = x as Array<FdsCheckboxItem>;
  return a.some((s) => s.checked === true) ? null : 'Angiv venligst et valg';
}
