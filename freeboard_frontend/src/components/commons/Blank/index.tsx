interface IBlankProps {
  width?: string;
  height?: string;
}

export default function Blank01(props: IBlankProps) {
  return (
    <div
      style={{ width: props.width ?? "0", height: props.height ?? "0" }}
    ></div>
  );
}
