import {
  validateEmail,
  validatePhoneNumber,
  validatePassword,
  validateUsername,
} from "./src/validators/syncValidators.js";
import { getErrorMessage } from "./src/utils/errorMessages.js";
import {
  checkUsernameAvailability,
  checkEmailAvailability,
  verifyPhoneNumber,
  verifyCaptcha,
  validateZipCode,
} from "./src/utils/validationHelpers.js";

import useFormValidator from './src/hooks/useFormValidator';

export {
  validateEmail,
  validatePhoneNumber,
  validatePassword,
  validateUsername,
  checkUsernameAvailability,
  checkEmailAvailability,
  verifyPhoneNumber,
  verifyCaptcha,
  validateZipCode,
  getErrorMessage,
  useFormValidator
};
