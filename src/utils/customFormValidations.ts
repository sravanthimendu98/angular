import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// Validator to check if a value contains numbers
export function noNumbersValidator(
  control: AbstractControl
): ValidationErrors | null {
  const regex = /\d/;
  if (regex.test(control.value)) {
    return { hasNumber: true };
  }
  return null;
}

// Validator for zip code format (5 digits)
export function zipCodeValidator(
  control: AbstractControl
): ValidationErrors | null {
  const zipCodePattern = /^[0-9]{5}$/;
  if (!zipCodePattern.test(control.value)) {
    return { invalidZipCode: true };
  }
  return null;
}

// Validator to check if the first letter is capitalized
export function capitalizedFirstLetterValidator(
  control: AbstractControl
): ValidationErrors | null {
  const value = control.value;
  if (value && value.length > 0 && value[0] !== value[0].toUpperCase()) {
    return { firstLetterNotCapitalized: true };
  }
  return null;
}

// Custom Email Validator
export function customEmailValidator(): ValidatorFn {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return (control: AbstractControl): ValidationErrors | null => {
    const isValid = emailRegex.test(control.value);
    return isValid ? null : { invalidEmail: true };
  };
}
