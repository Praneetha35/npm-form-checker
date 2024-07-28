import { useState, useCallback } from "react";

/**
 * Custom hook for form validation.
 * @param {Object} validators - An object where keys are form field names and values are arrays of validation rules.
 * @returns {Object} - Returns an object with `validate`, `errors`, `register`, `loading`, and `values`.
 */
const useFormValidator = (validators) => {
  const [errors, setErrors] = useState({}); // State to store validation errors
  const [loading, setLoading] = useState(false); // State to indicate if validation is in progress
  const [values, setValues] = useState({}); // State to store form field values

  /**
   * Registers a form field with validation rules.
   * @param {string} name - The name of the form field.
   * @param {Array} rules - An array of validation rules for the field.
   * @returns {Object} - Returns an object with `name`, `onChange`, and `onBlur` properties.
   */
  const register = (name, rules) => {
    return {
      name,
      onChange: async (e) => {
        const value = e.target.value;
        // Update form values state
        setValues((prevValues) => ({
          ...prevValues,
          [name]: value,
        }));

        // Validate field value on change
        let error = null;
        setLoading(true);
        for (let rule of rules) {
          try {
            await rule(value);
          } catch (err) {
            error = err.message;
            break;
          }
        }
        // Update errors state with validation result
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: error,
        }));
        setLoading(false);
      },
      onBlur: async (e) => {
        const value = e.target.value;
        // Validate field value on blur
        let error = null;
        setLoading(true);
        for (let rule of rules) {
          try {
            await rule(value);
          } catch (err) {
            error = err.message;
            break;
          }
        }
        // Update errors state with validation result
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: error,
        }));
        setLoading(false);
      },
    };
  };

  /**
   * Validates all form fields.
   * @returns {boolean} - Returns true if all fields are valid, otherwise false.
   */
  const validate = useCallback(async () => {
    setLoading(true);
    const newErrors = {};
    // Iterate over all validators and validate each field
    for (let name in validators) {
      const value = values[name];
      const rules = validators[name];
      for (let rule of rules) {
        try {
          await rule(value);
        } catch (err) {
          newErrors[name] = err.message;
          break;
        }
      }
    }
    // Update errors state with validation results
    setErrors(newErrors);
    setLoading(false);
    // Return true if no errors, otherwise false
    return Object.keys(newErrors).length === 0;
  }, [validators, values]);

  return {
    validate,  // Function to validate all form fields
    errors,    // Object containing validation errors
    register,  // Function to register a form field with validation rules
    loading,   // Boolean indicating if validation is in progress
    values,    // Object containing form field values
  };
};

export default useFormValidator;
