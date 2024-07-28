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
} from "./src/validators/asyncValidators.js";

import useFormValidator from './src/hooks/useFormValidator.js';

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
