import styled from "@emotion/styled";
import { ButtonHTMLAttributes } from "react";
import { GreenButton } from "../../styles/styles";

const Button = styled(GreenButton)`
  padding: 14px 20px 14px 20px;
`;
interface IButtonProps {
  name?: string;
  type?: "submit" | "button" | "reset";
  attr?: ButtonHTMLAttributes<HTMLButtonElement>;
}

export default function Button01(props: IButtonProps) {
  return (
    <div>
      <Button type={props.type ?? "submit"}>{props.name}</Button>
    </div>
  );
}
