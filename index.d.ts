// form-checker.d.ts

declare module "@validation-lib/form-checker" {
  export function validateEmail(email: string): boolean;
  export function validatePhoneNumber(phone: string): boolean;
  export function validatePassword(password: string): boolean;
  export function validateUsername(username: string): boolean;
  export function checkUsernameAvailability(username: string): Promise<boolean>;
  export function checkEmailAvailability(email: string): Promise<boolean>;
  export function verifyPhoneNumber(phone: string): Promise<boolean>;
  export function verifyCaptcha(captchaResponse: string): Promise<boolean>;
  export function validateZipCode(zip: string): boolean;
  export function getErrorMessage(errorCode: string): string;
  export function useFormValidator(): void;
}
