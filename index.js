import {
  validateEmail,
  validatePhoneNumber,
  validatePassword,
  validateUsername,
} from "./src/validators/syncValidators.js";
import { getErrorMessage } from "./src/utils/errorMessages.js";
// import { validateUsernameAsync } from './validators/asyncValidators';

export {
  validateEmail,
  validatePhoneNumber,
  validatePassword,
  validateUsername,
  // validateUsernameAsync,
  getErrorMessage,
};
