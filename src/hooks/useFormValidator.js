import { useState, useCallback } from "react";

const useFormValidator = (validators) => {
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({});

  const register = (name, rules) => {
    return {
      name,
      onChange: async (e) => {
        const value = e.target.value;
        setValues((prevValues) => ({
          ...prevValues,
          [name]: value,
        }));

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
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: error,
        }));
        setLoading(false);
      },
      onBlur: async (e) => {
        const value = e.target.value;
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
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: error,
        }));
        setLoading(false);
      },
    };
  };

  const validate = useCallback(async () => {
    setLoading(true);
    const newErrors = {};
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
    setErrors(newErrors);
    setLoading(false);
    return Object.keys(newErrors).length === 0;
  }, [validators, values]);

  return {
    validate,
    errors,
    register,
    loading,
    values,
  };
};

export default useFormValidator;
