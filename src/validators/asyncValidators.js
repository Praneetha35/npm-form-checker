export const checkUsernameAvailability = async (username, url, params = {}) => {
  const queryParams = new URLSearchParams({
    ...params,
    username,
  }).toString();
  const apiUrl = `${url}?${queryParams}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (!data.available) {
      throw new Error("Username is already taken");
    }
  } catch (error) {
    throw new Error(error.message || "Error checking username availability");
  }
};

export const checkEmailAvailability = async (email, url, params = {}) => {
  const queryParams = new URLSearchParams({
    ...params,
    email,
  }).toString();
  const apiUrl = `${url}?${queryParams}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (!data.available) {
      throw new Error("Email is already registered");
    }
  } catch (error) {
    throw new Error(error.message || "Error checking email availability");
  }
};

export const verifyPhoneNumber = async (phoneNumber, url, params = {}) => {
  const queryParams = new URLSearchParams({
    ...params,
    phoneNumber,
  }).toString();
  const apiUrl = `${url}?${queryParams}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (!data.valid) {
      throw new Error("Phone number is invalid or already registered");
    }
  } catch (error) {
    throw new Error(error.message || "Error verifying phone number");
  }
};

export const verifyCaptcha = async (captchaResponse, url, params = {}) => {
  const queryParams = new URLSearchParams({
    ...params,
    captchaResponse,
  }).toString();
  const apiUrl = `${url}?${queryParams}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (!data.success) {
      throw new Error("Invalid CAPTCHA");
    }
  } catch (error) {
    throw new Error(error.message || "Error verifying CAPTCHA");
  }
};

export const validateZipCode = async (zipCode, country, url, params = {}) => {
  const queryParams = new URLSearchParams({
    ...params,
    zipCode,
    country,
  }).toString();
  const apiUrl = `${url}?${queryParams}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (!data.valid) {
      throw new Error("Invalid ZIP code");
    }
  } catch (error) {
    throw new Error(error.message || "Error validating ZIP code");
  }
};
