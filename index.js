// Import synchronous validation functions
import {
  validateEmail,
  validatePhoneNumber,
  validatePassword,
  validateUsername,
} from "./src/validators/syncValidators.js";

// Import asynchronous validation functions
import {
  checkUsernameAvailability,
  checkEmailAvailability,
  verifyPhoneNumber,
} from "./src/validators/asyncValidators.js";

// Import utility function for error messages
import { getErrorMessage } from "./src/utils/errorMessages.js";

// Import custom hook for form validation
import useFormValidator from './src/hooks/useFormValidator.js';

// Export all imported functions and hook
export {
  validateEmail,
  validatePhoneNumber,
  validatePassword,
  validateUsername,
  checkUsernameAvailability,
  checkEmailAvailability,
  verifyPhoneNumber,
  getErrorMessage,
  useFormValidator
};
