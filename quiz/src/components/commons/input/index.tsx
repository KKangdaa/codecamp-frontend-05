import { UseFormRegisterReturn } from "react-hook-form";

interface IInputProps {
  type: string;
  register: UseFormRegisterReturn;
}

export default function Input(props: IInputProps) {
  return <input type={props.type} {...props.register} />;
}
