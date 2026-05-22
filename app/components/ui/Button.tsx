import React from "react";

const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "outline" }) => {
  const base =
    "px-6 py-3 rounded-lg font-semibold text-sm transition-[transform,box-shadow,border-color,color,background-color] duration-150 ease-out inline-flex items-center gap-2 justify-center group transform hover:scale-[1.02] active:scale-[0.97] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:active:scale-100";
  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-accent to-accent-hover text-white shadow-glass hover:shadow-lg hover:shadow-accent/30"
      : "border border-border bg-surface-raised text-text hover:border-accent hover:text-accent backdrop-blur-sm";

  return (
    <button className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
