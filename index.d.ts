/**
 * Declaration module for the form validation library.
 * This module provides TypeScript declarations for the validation functions and hooks provided by the library.
 */
declare module "@validation-lib/form-checker" {
  /**
   * Validates an email address.
   * @param {string} email - The email address to validate.
   * @returns {boolean} - Returns true if the email is valid, otherwise false.
   */
  export function validateEmail(email: string): boolean;

  /**
   * Validates a phone number.
   * @param {string} phone - The phone number to validate.
   * @returns {boolean} - Returns true if the phone number is valid, otherwise false.
   */
  export function validatePhoneNumber(phone: string): boolean;

  /**
   * Validates a password.
   * @param {string} password - The password to validate.
   * @returns {boolean} - Returns true if the password is valid, otherwise false.
   */
  export function validatePassword(password: string): boolean;

  /**
   * Validates a username.
   * @param {string} username - The username to validate.
   * @returns {boolean} - Returns true if the username is valid, otherwise false.
   */
  export function validateUsername(username: string): boolean;

  /**
   * Checks if a username is available.
   * @param {string} username - The username to check.
   * @returns {Promise<boolean>} - Returns a promise that resolves to true if the username is available, otherwise false.
   */
  export function checkUsernameAvailability(username: string): Promise<boolean>;

  /**
   * Checks if an email address is available.
   * @param {string} email - The email address to check.
   * @returns {Promise<boolean>} - Returns a promise that resolves to true if the email is available, otherwise false.
   */
  export function checkEmailAvailability(email: string): Promise<boolean>;

  /**
   * Verifies a phone number.
   * @param {string} phone - The phone number to verify.
   * @returns {Promise<boolean>} - Returns a promise that resolves to true if the phone number is valid, otherwise false.
   */
  export function verifyPhoneNumber(phone: string): Promise<boolean>;

  /**
   * Verifies a CAPTCHA response.
   * @param {string} captchaResponse - The CAPTCHA response to verify.
   * @returns {Promise<boolean>} - Returns a promise that resolves to true if the CAPTCHA is valid, otherwise false.
   */
  export function verifyCaptcha(captchaResponse: string): Promise<boolean>;

  /**
   * Validates a ZIP code.
   * @param {string} zip - The ZIP code to validate.
   * @returns {boolean} - Returns true if the ZIP code is valid, otherwise false.
   */
  export function validateZipCode(zip: string): boolean;

  /**
   * Gets an error message for a given error code.
   * @param {string} errorCode - The error code to get the message for.
   * @returns {string} - Returns the error message.
   */
  export function getErrorMessage(errorCode: string): string;

  /**
   * Custom hook for form validation.
   * @returns {void}
   */
  export function useFormValidator(): void;
}
