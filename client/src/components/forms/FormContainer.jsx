import { FormProvider } from "../../contexts/FormContext";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { useState } from "react";
import toast from "react-hot-toast";

function FormContainer({
  children,
  onSubmit,
  initialData = {},
  onSuccess,
  onError,
  className = "",
}) {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm({
    defaultValues: initialData,
  });

  const submitHandler = async (data) => {
    setIsLoading(true);
    try {
      await onSubmit(data);
      if (onSuccess) {
        onSuccess(data);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      if (onError) {
        onError(error);
      } else {
        toast.error(
          t("forms.genericError", "An error occurred. Please try again."),
        );
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FormProvider initialData={initialData}>
      <form onSubmit={handleSubmit(submitHandler)} className={className}>
        {typeof children === "function"
          ? children({
              isLoading,
              errors: { ...errors },
              register,
              watch,
              setValue,
              reset,
            })
          : children}
      </form>
    </FormProvider>
  );
}

export default FormContainer;
