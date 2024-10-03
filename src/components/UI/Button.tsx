import React from "react";

// interface to declare all our prop types
interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

// button component, consuming props
const Button: React.FC<Props> = ({
  children,
  onClick,
  className,
  disabled,
  ...rest
}) => {
  return (
    <button
      className={`${className}` + (disabled ? " disabled" : "")}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
