// Helper function to check if a value is required
export const isRequired = (value) => {
  if (!value || value.trim().length === 0) {
    throw new Error("required");
  }
};

// Helper function to validate an email address
export const isEmail = (value) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(value)) {
    throw new Error("email");
  }
};

// Helper function to check if a value meets a minimum length requirement
export const hasMinLength = (value, min) => {
  if (value.length < min) {
    throw new Error("minLength");
  }
};
