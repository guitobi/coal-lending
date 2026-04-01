function CheckboxField({
  id,
  label,
  register,
  errors,
  className = "",
  children,
  ...props
}) {
  return (
    <div className={`mt-4 ${className}`}>
      <label className="flex items-start space-x-3">
        <input
          type="checkbox"
          id={id}
          {...register(id, props.registerOptions)}
          className="mt-1 h-4 w-4 text-orange-500 border-stone-700 rounded focus:ring-orange-500 focus:ring-2"
        />
        <div className="text-stone-300 text-sm">
          {label}
          {children}
        </div>
      </label>
      {errors?.[id] && (
        <p className="mt-1 text-red-500 text-xs">{errors[id].message}</p>
      )}
    </div>
  );
}

export default CheckboxField;
