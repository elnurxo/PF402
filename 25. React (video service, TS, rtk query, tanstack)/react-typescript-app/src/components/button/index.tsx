import { ComponentProps, FC } from "react";

type ButtonSize = number | string;

// interface ButtonProps {
//   children: React.ReactNode;
//   padding: [number, number, number, number]; //tuple
//   style?: React.CSSProperties;
//   variant: "danger" | "success" | "warning";
//   size?: ButtonSize;
//   data: Record<string, string | number>;
//   handleClick: (val: string) => void;
//   count: number;
//   setCount: React.Dispatch<React.SetStateAction<number>>;
// }

type ButtonProps = ComponentProps<"button"> & {
  variant: string;
  handleClick: (val: string) => void;
  buttonRef: React.RefObject<null | HTMLButtonElement>;
};

const Button: FC<ButtonProps> = ({ variant, ...rest }): JSX.Element => {
  const actions = ["pause", "stop"] as const;
  console.log(actions);
  return <button {...rest}>click me {variant}!</button>;
};

export default Button;
