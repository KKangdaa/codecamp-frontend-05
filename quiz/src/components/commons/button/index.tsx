import styled from "@emotion/styled";
import { ButtonHTMLAttributes } from "react";

interface IButton {
  isValid: boolean;
}
const Buttons = styled.button`
  background: ${(props: IButton) => (props.isValid ? "gold" : "")};
`;
interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isValid: boolean;
  name: string;
}

export default function Button(props: IButtonProps) {
  return (
    <Buttons type={props.type} isValid={props.isValid}>
      {props.name}
    </Buttons>
  );
}
