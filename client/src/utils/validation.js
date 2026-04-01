// Спільні правила валідації для форм
export const validationRules = {
  name: {
    required: "This field is required",
    minLength: {
      value: 2,
      message: "Name must be at least 2 characters",
    },
    maxLength: {
      value: 50,
      message: "Name must be less than 50 characters",
    },
  },
  email: {
    required: "This field is required",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Invalid email address",
    },
  },
  phone: {
    required: "This field is required",
    pattern: {
      value: /^\+?[1-9]\d{6,14}$/,
      message: "Invalid phone number",
    },
  },
  city: {
    required: "This field is required",
    minLength: {
      value: 2,
      message: "City must be at least 2 characters",
    },
  },
  weight: {
    required: "This field is required",
    min: {
      value: 100,
      message: "Minimum order is 100 kg",
    },
    pattern: {
      value: /^\d+$/,
      message: "Please enter a valid number",
    },
  },
  subject: {
    required: "Subject is required",
  },
  message: {
    required: "Message is required",
    minLength: {
      value: 10,
      message: "Message must be at least 10 characters",
    },
  },
  consent: (t) => ({
    required: t(
      "common.validation.consentRequired",
      "You must agree to data processing to submit",
    ),
  }),
};

// Універсальна функція для перевірки чи форма має помилки
export const hasFormErrors = (errors) => {
  return Object.keys(errors).length > 0;
};

// Універсальна функція для отримання повідомлення про помилку
export const getErrorMessage = (error) => {
  if (!error) return null;
  return typeof error === "string" ? error : error.message;
};

// Функція для створення кастомних правил валідації
export const createValidationRule = (validatorFn, errorMessage) => {
  return {
    validate: validatorFn,
    message: errorMessage,
  };
};

// Поширені валідаційні функції
export const validators = {
  // Перевіряє, чи значення є дійсним номером телефону
  phone: (value) =>
    /^(\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/.test(value) ||
    "Invalid phone number format",

  // Перевіряє, чи значення є дійсною адресою електронної пошти
  email: (value) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || "Invalid email address",

  // Перевіряє, чи значення має певну мінімальну довжину
  minLength: (min) => (value) =>
    !value || value.length >= min || `Minimum length is ${min} characters`,

  // Перевіряє, чи значення має певну максимальну довжину
  maxLength: (max) => (value) =>
    !value || value.length <= max || `Maximum length is ${max} characters`,

  // Перевіряє, чи значення є числом в певному діапазоні
  numberRange: (min, max) => (value) => {
    const num = Number(value);
    return (
      isNaN(num) ||
      (num >= min && num <= max) ||
      `Value must be between ${min} and ${max}`
    );
  },

  // Перевіряє, чи значення є обов'язковим
  required:
    (customMessage = "This field is required") =>
    (value) => {
      if (typeof value === "string")
        return value.trim().length > 0 || customMessage;
      if (typeof value === "number")
        return (value !== null && value !== undefined) || customMessage;
      return value || customMessage;
    },
};

// Комбіновані валідаційні правила
export const combinedValidators = {
  // Валідація для імені користувача
  userName: {
    required: validators.required("Name is required"),
    minLength: validators.minLength(2)("Name must be at least 2 characters"),
    maxLength: validators.maxLength(50)("Name must be less than 50 characters"),
  },

  // Валідація для електронної пошти
  userEmail: {
    required: validators.required("Email is required"),
    email: validators.email("Invalid email address"),
  },

  // Валідація для номера телефону
  userPhone: {
    required: validators.required("Phone number is required"),
    phone: validators.phone("Invalid phone number format"),
  },

  // Валідація для міста
  userCity: {
    required: validators.required("City is required"),
    minLength: validators.minLength(2)("City must be at least 2 characters"),
  },
};
