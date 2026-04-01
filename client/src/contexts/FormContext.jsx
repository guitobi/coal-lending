import { createContext, useState } from "react";

const FormContext = createContext();

function FormProvider({ children, initialData = {} }) {
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const updateField = (fieldName, value) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));

    // Clear error for this field when value changes
    if (errors[fieldName]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[fieldName];
        return newErrors;
      });
    }
  };

  const setError = (fieldName, error) => {
    setErrors((prev) => ({
      ...prev,
      [fieldName]: error,
    }));
  };

  const clearErrors = () => {
    setErrors({});
  };

  const validateForm = (validationRules) => {
    const newErrors = {};

    for (const fieldName in validationRules) {
      const rule = validationRules[fieldName];
      const value = formData[fieldName];

      if (rule.required && (!value || value.toString().trim() === "")) {
        newErrors[fieldName] = rule.required;
      } else if (
        rule.minLength &&
        value &&
        value.length < rule.minLength.value
      ) {
        newErrors[fieldName] = rule.minLength.message;
      } else if (
        rule.maxLength &&
        value &&
        value.length > rule.maxLength.value
      ) {
        newErrors[fieldName] = rule.maxLength.message;
      } else if (rule.pattern && value && !rule.pattern.value.test(value)) {
        newErrors[fieldName] = rule.pattern.message;
      } else if (rule.min && value && Number(value) < rule.min.value) {
        newErrors[fieldName] = rule.min.message;
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const resetForm = () => {
    setFormData(initialData);
    setErrors({});
    setIsSubmitting(false);
    setSubmitSuccess(false);
    setSubmitError(null);
  };

  const value = {
    formData,
    errors,
    isSubmitting,
    submitSuccess,
    submitError,
    updateField,
    setError,
    clearErrors,
    validateForm,
    resetForm,
    setIsSubmitting,
    setSubmitSuccess,
    setSubmitError,
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
}

export { FormProvider, FormContext };

export default FormContext;
