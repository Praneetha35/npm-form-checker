import {
    validateEmail,
    validatePhoneNumber,
    validatePassword,
    validateUsername
} from 'form-checker/src/validators/syncValidators';
// import { validateUsernameAsync } from './validators/asyncValidators';
import { getErrorMessage } from 'form-checker/src/utils/errorMessages';
import { getLocalizedMessage } from './localization';

export {
    validateEmail,
    validatePhoneNumber,
    validatePassword,
    validateUsername,
    // validateUsernameAsync,
    getErrorMessage,
    // getLocalizedMessage
};
