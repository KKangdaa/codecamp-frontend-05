import { useContext } from "react";
import { ExampleContext } from "../../../../pages/example/context/edit";

export default function ExampleWrite() {
  const { isEdit } = useContext(ExampleContext);

  return <h1>{isEdit ? "수정하기" : "등록하기"}</h1>;
}
