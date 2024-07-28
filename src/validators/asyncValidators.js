// Asynchronous validation functions

/**
 * Checks the availability of a username by querying a specified URL.
 * @param {string} username - The username to check.
 * @param {string} url - The API endpoint to query.
 * @param {object} params - Additional query parameters to include in the request.
 * @throws Will throw an error if the username is already taken or if there's a network error.
 */
export const checkUsernameAvailability = async (username, url, params = {}) => {
  // Construct the query parameters string from the provided params and username
  const queryParams = new URLSearchParams({
    ...params,
    username,
  }).toString();
  
  // Construct the full API URL with query parameters
  const apiUrl = `${url}?${queryParams}`;

  try {
    // Send a GET request to the API
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Check if the username is available
    if (!data.available) {
      throw new Error("Username is already taken");
    }
  } catch (error) {
    // Throw an error if the fetch fails or username is not available
    throw new Error(error.message || "Error checking username availability");
  }
};

/**
 * Checks the availability of an email by querying a specified URL.
 * @param {string} email - The email to check.
 * @param {string} url - The API endpoint to query.
 * @param {object} params - Additional query parameters to include in the request.
 * @throws Will throw an error if the email is already registered or if there's a network error.
 */
export const checkEmailAvailability = async (email, url, params = {}) => {
  // Construct the query parameters string from the provided params and email
  const queryParams = new URLSearchParams({
    ...params,
    email,
  }).toString();
  
  // Construct the full API URL with query parameters
  const apiUrl = `${url}?${queryParams}`;

  try {
    // Send a GET request to the API
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Check if the email is available
    if (!data.available) {
      throw new Error("Email is already registered");
    }
  } catch (error) {
    // Throw an error if the fetch fails or email is not available
    throw new Error(error.message || "Error checking email availability");
  }
};

/**
 * Verifies a phone number by querying a specified URL.
 * @param {string} phoneNumber - The phone number to verify.
 * @param {string} url - The API endpoint to query.
 * @param {object} params - Additional query parameters to include in the request.
 * @throws Will throw an error if the phone number is invalid or already registered, or if there's a network error.
 */
export const verifyPhoneNumber = async (phoneNumber, url, params = {}) => {
  // Construct the query parameters string from the provided params and phoneNumber
  const queryParams = new URLSearchParams({
    ...params,
    phoneNumber,
  }).toString();
  
  // Construct the full API URL with query parameters
  const apiUrl = `${url}?${queryParams}`;

  try {
    // Send a GET request to the API
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Check if the phone number is valid
    if (!data.valid) {
      throw new Error("Phone number is invalid or already registered");
    }
  } catch (error) {
    // Throw an error if the fetch fails or phone number is not valid
    throw new Error(error.message || "Error verifying phone number");
  }
};
