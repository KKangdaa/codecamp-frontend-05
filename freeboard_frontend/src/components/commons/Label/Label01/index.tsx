import { BaseHTMLAttributes, HTMLAttributes, HtmlHTMLAttributes } from "react";

interface ILabelProps {
  weight?: number | string;
  size?: string;
  color?: string;
  value: string;
  attr?: HTMLAttributes<HTMLDivElement>;
}

export default function Label01(props: ILabelProps) {
  return (
    <div
      {...props.attr}
      style={{
        color: props.color ?? "black",
        fontWeight: props.weight ?? "normal",
        fontSize: props.size ?? "25px",
        padding: "10px 0px",
      }}
    >
      {props.value}
    </div>
  );
}
