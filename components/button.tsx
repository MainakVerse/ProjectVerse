// components/button.tsx or .jsx
import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({ className = "", children, ...props }) => {
  return (
    <button className={`px-4 py-2 rounded bg-blue-600 text-white ${className}`} {...props}>
      {children}
    </button>
  );
};
