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
   * @param {string} url - The API endpoint to query.
   * @param {object} params - Additional query parameters to include in the request.
   * @returns {Promise<void>} - Returns a promise that resolves if the username is available, otherwise rejects.
   * @throws Will throw an error if the username is already taken or if there's a network error.
   */
  export function checkUsernameAvailability(username: string, url: string, params?: object): Promise<void>;

  /**
   * Checks if an email address is available.
   * @param {string} email - The email address to check.
   * @param {string} url - The API endpoint to query.
   * @param {object} params - Additional query parameters to include in the request.
   * @returns {Promise<void>} - Returns a promise that resolves if the email is available, otherwise rejects.
   * @throws Will throw an error if the email is already registered or if there's a network error.
   */
  export function checkEmailAvailability(email: string, url: string, params?: object): Promise<void>;

  /**
   * Verifies a phone number.
   * @param {string} phoneNumber - The phone number to verify.
   * @param {string} url - The API endpoint to query.
   * @param {object} params - Additional query parameters to include in the request.
   * @returns {Promise<void>} - Returns a promise that resolves if the phone number is valid, otherwise rejects.
   * @throws Will throw an error if the phone number is invalid or already registered, or if there's a network error.
   */
  export function verifyPhoneNumber(phoneNumber: string, url: string, params?: object): Promise<void>;

  export function getErrorMessage(errorCode: string): string;

  /**
   * Custom hook for form validation.
   * @returns {void}
   */
  export function useFormValidator(): void;
}
