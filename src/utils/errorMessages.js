/**
 * Generates an error message for a failed validation rule.
 * @param {string} rule - The name of the validation rule that failed.
 * @param {string} [message] - Optional custom error message.
 * @returns {string} - Returns the custom error message if provided, otherwise a default error message.
 */
export function getErrorMessage(rule, message) {
    // Return the custom message if provided, otherwise return a default message with the rule name
    return message || `Validation failed for rule: ${rule}`;
}