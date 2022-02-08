import { useEffect, useRef } from "react";

export default function StateLifeCycle() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <>
      <input type="password" ref={inputRef} />
    </>
  );
}
