// Synchronous validation functions

// Email validation
export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) || "Invalid email format";
}

// Phone number validation
export function validatePhoneNumber(phoneNumber) {
  const phoneRegex = /^[0-9]{10}$/;
  return phoneRegex.test(phoneNumber) || "Invalid phone number format";
}

// Password validation (e.g., must be at least 8 characters, include a number)
export function validatePassword(password) {
  const passwordRegex = /^(?=.*\d).{8,}$/;
  return (
    passwordRegex.test(password) ||
    "Password must be at least 8 characters long and contain a number"
  );
}

// Username validation
export function validateUsername(username) {
  const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
  return (
    usernameRegex.test(username) ||
    "Username must be 3-20 characters long and contain only letters, numbers, and underscores"
  );
}
