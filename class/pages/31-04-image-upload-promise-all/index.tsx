import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
    }
  }
`;

export default function ImageUploadSubmitPage() {
  const [files, setFiles] = useState<(File | undefined)[]>([
    undefined,
    undefined,
    undefined,
  ]);
  const [imageUrls, setImageUrls] = useState(["", "", ""]);

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);

  const onChangeFile =
    (number: number) => (e: ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      console.log(file);

      if (!file) {
        alert("파일이 없습니다");
        return;
      }

      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = (data) => {
        if (typeof data.target?.result === "string") {
          console.log(data.target?.result);
          const tempUrls = [...imageUrls];
          tempUrls[number] = data.target?.result;
          setImageUrls(tempUrls);

          if (files) {
            const tempFiles = [...files];
            tempFiles[number] = file;
            setFiles(tempFiles);
          }
        }
      };
    };

  const onClickSubmit = async () => {
    // 각각 보내기 연습 (전송되는 시간이 오래 걸림)
    /* const start1 = performance.now();
    await uploadFile({
      variables: {
        file: files[0],
      },
    });

    await uploadFile({
      variables: {
        file: files[1],
      },
    });

    await uploadFile({
      variables: {
        file: files[2],
      },
    });

    const end1 = performance.now();
    console.log(end1 - start1);
 */
    // 1. image업로드해서 url 받아오기
    //    - uploadFile()
    const start = performance.now();
    const results = await Promise.all(
      files?.map(
        (el) =>
          el &&
          uploadFile({
            variables: {
              file: el,
            },
          })
      )
    );
    console.log(results);
    const resultUrls = results.map((el) =>
      el?.data ? el.data?.uploadFile.url : ""
    );
    console.log(resultUrls);
    const end = performance.now();
    console.log(end - start);

    // const imageUrl = result.data?.uploadFile.url || "";

    // 2. createBoard로 게시물 등록하기
    // writer, title, contents 전송
    // imageUrl 전송
    // 위의 data.target.result는 가상의 url이기 때문에
    const result2 = await createBoard({
      variables: {
        createBoardInput: {
          writer: "낭콩",
          password: "kong",
          title: "강아지",
          contents: "콩",
          images: resultUrls,
        },
      },
    });
    console.log(result2.data?.createBoard._id);
  };

  return (
    <>
      <div>
        <img src={imageUrls[0]} style={{ width: "200px" }} />
        <img src={imageUrls[1]} style={{ width: "200px" }} />
        <img src={imageUrls[2]} style={{ width: "200px" }} />
      </div>
      <div>
        <input type="file" onChange={onChangeFile(0)} />
        <input type="file" onChange={onChangeFile(1)} />
        <input type="file" onChange={onChangeFile(2)} />
      </div>
      <button onClick={onClickSubmit}>등록하기</button>
    </>
  );
}
