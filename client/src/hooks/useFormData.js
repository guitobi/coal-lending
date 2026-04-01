import { useState } from "react";
import { useForm } from "react-hook-form";

export function useFormData() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
    trigger,
  } = useForm({
    mode: "onChange", // Вмикаємо валідацію при зміні
  });

  const [localErrors, setLocalErrors] = useState({});

  // Об'єднуємо помилки з react-hook-form та локальні помилки
  const allErrors = { ...errors, ...localErrors };

  const validateField = async (fieldName) => {
    const isValid = await trigger(fieldName);
    return isValid;
  };

  const setFieldValue = (fieldName, value) => {
    setValue(fieldName, value);
  };

  const setCustomError = (fieldName, message) => {
    setLocalErrors((prev) => ({
      ...prev,
      [fieldName]: { message },
    }));
  };

  const clearCustomError = (fieldName) => {
    setLocalErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors[fieldName];
      return newErrors;
    });
  };

  return {
    register,
    handleSubmit,
    errors: allErrors,
    watch,
    setValue: setFieldValue,
    reset,
    validateField,
    setCustomError,
    clearCustomError,
    trigger,
  };
}
