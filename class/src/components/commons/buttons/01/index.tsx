import styled from "@emotion/styled";
import { ButtonHTMLAttributes } from "react";

interface IMyButtonProps {
  isValid: boolean;
}

const MyButton = styled.button`
  background: ${(props: IMyButtonProps) => (props.isValid ? "gold" : "")};
`;

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isValid: boolean;
  name: string;
}

export default function Button01(props: IButtonProps) {
  return (
    <MyButton type={props.type} isValid={props.isValid}>
      {props.name}
    </MyButton>
  );
}
