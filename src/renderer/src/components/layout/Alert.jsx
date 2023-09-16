import React, { useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";

const Alert = () => {
  const { alert } = useContext(AlertContext);

  return (
    alert !== null && (
      <p className="flex item-start mb-4 space-x-2">
        {alert.type === "error" && (
          <svg
            className="w-6 h-6 flex-none mt-0.5"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="12" fill="#FECDD3"></circle>
            <path
              d="M8 8l8 8M16 8l-8 8"
              stroke="#B91C1C"
              strokeWidth="2"
            ></path>
          </svg>
        )}
        {alert.type === "info" && (
          <svg className="w-6 h-6 flex-none mt-0.5" fill="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="12" fill="#a7d6fc"></circle>
          <path d="M12 16v-8M12 18.5a1 1 0 110-2 1 1 0 010 2z" stroke="#2B6CB0" strokeWidth="2"></path>
        </svg>
        )}
        <p className="flex-1 text-base leading-7">
            <i>{alert.message}</i>
        </p>
      </p>
    )
  );
};

export default Alert;
