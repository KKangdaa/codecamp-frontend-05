import { useForm } from "react-hook-form";

// import * as ReactQuill from 'react-quill'; // Typescript
// import ReactQuill from "react-quill"; // 다이나믹 임포트로 변경!!
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function WebEditorPage() {
  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
  });

  const handleChange = (value: string) => {
    console.log(value);

    // register로 등록하지 않고, 강제로 값을 넣어주는 기능
    setValue("contents", value === "<p><br></p>" ? "" : value);

    // onChange가 됐는지 안됐는지 react-hook-form에 알려주는 기능
    trigger("contents");
  };

  /* if (process.browser) {
    console.log("브라우저");
  } else {
    console.log("프론트엔드 서버");
  } */

  return (
    <div>
      작성자 : <input type="text" {...register("writer")} /> <br />
      비밀번호 : <input type="password" {...register("password")} /> <br />
      제목 : <input type="text" {...register("title")} /> <br />
      내용 :<ReactQuill onChange={handleChange} /> <br />
      <button>등록</button>
    </div>
  );
}
