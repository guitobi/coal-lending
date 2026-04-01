import { MessageSquare } from "lucide-react";

function TextAreaField({
  id,
  label,
  placeholder,
  register,
  errors,
  required,
  icon = "message",
  className = "",
  rows = 5,
  ...props
}) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label
        className="text-sm font-medium text-stone-300 flex items-center gap-2"
        htmlFor={id}
      >
        {icon && <MessageSquare size={16} className="text-orange-500" />}
        {label}
        {required && <span className="text-red-500">*</span>}
        {props.optionalLabel && (
          <span className="text-stone-500">{props.optionalLabel}</span>
        )}
      </label>
      <div className="relative">
        <textarea
          id={id}
          rows={rows}
          placeholder={placeholder}
          {...register(id, props.registerOptions)}
          className="w-full bg-stone-950/50 border-2 border-stone-800 rounded-xl px-4 py-3.5 text-white placeholder-stone-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all resize-none"
        ></textarea>
      </div>
      {errors?.[id]?.message && (
        <p
          role="alert"
          className="text-xs font-medium text-red-400 flex items-center gap-1"
        >
          ⚠ {errors[id].message}
        </p>
      )}
    </div>
  );
}

export default TextAreaField;
