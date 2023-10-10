import { ButtonHTMLAttributes } from "react";

const Button = ({
  children,
  ...rest
}: {
  children?: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <button {...rest}>{children}</button>;
};

export default Button;
