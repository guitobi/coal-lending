import React from "react";

function ContactItem({ icon, title, children }) {
  return (
    <div className="flex items-start gap-3 sm:gap-4">
      <div className="bg-orange-500/10 p-2 sm:p-3 rounded-lg shrink-0">
        {icon
          ? React.createElement(icon, {
              className: "w-5 h-5 sm:w-6 sm:h-6 text-orange-500",
            })
          : null}
      </div>
      <div className="min-w-0">
        <h3 className="text-stone-200 font-semibold mb-1 text-sm sm:text-base">
          {title}
        </h3>
        {children}
      </div>
    </div>
  );
}

export default ContactItem;
