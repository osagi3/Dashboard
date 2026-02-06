import React from "react";

interface IButton {
  className?: string;
  type?: "button" | "submit";
  children: React.ReactNode;
  onClick?: () => void;
}

function Button({ onClick, children, type = "button", className }: IButton) {
  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
