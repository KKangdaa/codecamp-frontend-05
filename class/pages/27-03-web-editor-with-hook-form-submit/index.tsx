import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateBoardArgs,
} from "../../src/commons/types/generated/types";

// import * as ReactQuill from 'react-quill'; // Typescript
// import ReactQuill from "react-quill"; // 다이나믹 임포트로 변경!!
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { useRouter } from "next/router";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

interface IFormValues {
  writer?: string;
  password?: string;
  title?: string;
  contents?: string;
}

export default function WebEditorPage() {
  const router = useRouter();
  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);

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

  const onClickSubmit = async (data: IFormValues) => {
    const { writer, password, title, contents } = data;

    if (!(writer && password && title && contents)) {
      // Modal.warn({ contents: "필수입력" });
      alert("필수입력");
      return;
    }

    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer,
            password,
            title,
            contents,
          },
        },
      });
      router.push(`/27-04-web-editor-detail/${result.data?.createBoard._id}`);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onClickSubmit)}>
        작성자 : <input type="text" {...register("writer")} /> <br />
        비밀번호 : <input type="password" {...register("password")} /> <br />
        제목 : <input type="text" {...register("title")} /> <br />
        내용 :<ReactQuill onChange={handleChange} /> <br />
        <button>등록</button>
      </form>
    </>
  );
}
