function FormFieldWrapper({
  children,
  className = "",
  showError = true,
  errorMessage,
}) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {children}
      {showError && errorMessage && (
        <p
          role="alert"
          className="text-xs font-medium text-red-400 flex items-center gap-1"
        >
          ⚠ {errorMessage}
        </p>
      )}
    </div>
  );
}

export default FormFieldWrapper;
