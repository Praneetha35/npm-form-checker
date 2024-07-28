// Synchronous validation functions

/**
 * Validates an email address.
 * @param {string} email - The email to validate.
 * @returns {true|string} - Returns true if valid, otherwise returns an error message.
 */
export function validateEmail(email) {
  // Regular expression to validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // Test the email against the regex and return appropriate message
  return emailRegex.test(email) || "Invalid email format";
}

/**
 * Validates a phone number.
 * @param {string} phoneNumber - The phone number to validate.
 * @returns {true|string} - Returns true if valid, otherwise returns an error message.
 */
export function validatePhoneNumber(phoneNumber) {
  // Regular expression to validate phone number format (10 digits)
  const phoneRegex = /^[0-9]{10}$/;
  // Test the phone number against the regex and return appropriate message
  return phoneRegex.test(phoneNumber) || "Invalid phone number format";
}

/**
 * Validates a password.
 * @param {string} password - The password to validate.
 * @returns {true|string} - Returns true if valid, otherwise returns an error message.
 */
export function validatePassword(password) {
  // Regular expression to validate password (at least 8 characters and contains a number)
  const passwordRegex = /^(?=.*\d).{8,}$/;
  // Test the password against the regex and return appropriate message
  return (
    passwordRegex.test(password) ||
    "Password must be at least 8 characters long and contain a number"
  );
}

/**
 * Validates a username.
 * @param {string} username - The username to validate.
 * @returns {true|string} - Returns true if valid, otherwise returns an error message.
 */
export function validateUsername(username) {
  // Regular expression to validate username (3-20 characters, letters, numbers, and underscores)
  const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
  // Test the username against the regex and return appropriate message
  return (
    usernameRegex.test(username) ||
    "Username must be 3-20 characters long and contain only letters, numbers, and underscores"
  );
}
