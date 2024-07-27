// Error handling and localization

export function getErrorMessage(rule, message) {
    return message || `Validation failed for rule: ${rule}`;
}
