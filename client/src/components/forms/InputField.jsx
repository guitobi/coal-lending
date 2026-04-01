import { Mail, User, Phone, MapPin, Weight, MessageSquare } from "lucide-react";

const iconMap = {
  user: User,
  mail: Mail,
  phone: Phone,
  mapPin: MapPin,
  weight: Weight,
  message: MessageSquare,
};

function InputField({
  id,
  label,
  type = "text",
  placeholder,
  register,
  errors,
  required,
  icon,
  className = "",
  ...props
}) {
  const IconComponent = icon ? iconMap[icon] : null;

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label
        className="text-sm font-medium text-stone-300 flex items-center gap-2"
        htmlFor={id}
      >
        {IconComponent && (
          <IconComponent size={16} className="text-orange-500" />
        )}
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          {...register(id, props.registerOptions)}
          className="w-full bg-stone-950/50 border-2 border-stone-800 rounded-xl px-4 py-3.5 text-white placeholder-stone-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
        />
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

export default InputField;
