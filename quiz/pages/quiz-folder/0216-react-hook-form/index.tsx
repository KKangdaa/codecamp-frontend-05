import { useState } from "react";
import { useForm } from "react-hook-form";

interface IData {
  writer?: string;
  password?: string;
  title?: string;
  contents?: string;
}

export default function ReactHookForm() {
  const { register, handleSubmit } = useForm();

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

  const onClickSubmit = (data: IData) => {
    // console.log(`password : ${data.writer}`);
    setWriterError(data.writer ? "" : "필수입력");
    setPasswordError(data.password ? "" : "필수입력");
    setTitleError(data.title ? "" : "필수입력");
    setContentsError(data.contents ? "" : "필수입력");
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자 : <input type="text" {...register("writer")} />
      <span>{writerError}</span>
      <br />
      비밀번호 : <input type="password" {...register("password")} />
      <span>{passwordError}</span>
      <br />
      제목 : <input type="text" {...register("title")} />
      <span>{titleError}</span>
      <br />
      내용 : <input type="text" {...register("contents")} />
      <span>{contentsError}</span>
      <br />
      <button>등록하기</button>
    </form>
  );
}
