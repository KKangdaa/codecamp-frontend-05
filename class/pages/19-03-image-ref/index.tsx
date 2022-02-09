import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useRef, useState } from "react";
import { CheckFileValidation } from "../../src/commons/libraries/ValidationUtils";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageValidationPage() {
  const fileRef = useRef<HTMLInputElement>(null);

  const [image, setImage] = useState("");

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    // file도 객체 속성이기 때문에 files?에 .을 추가해줘야 한다.
    console.log(file);

    const isValid = CheckFileValidation(file);

    if (!isValid) return;

    try {
      const result = await uploadFile({ variables: { file } });
      // file 을 file: file로 작성 가능하다. 숏핸드프로퍼티?
      console.log(result.data?.uploadFile.url);
      // https://storage.googleapis.com/ 콘솔에 찍힌 url과 같이 주소창에 작성해야 나온다
      // 나중에 사용하는 클라우드 url으로 변경하면 된다.

      setImage(result.data?.uploadFile.url || "");
    } catch (error: any) {
      alert(error.message);
    }
  };

  const onclickImage = () => {
    fileRef.current?.click();
  };

  return (
    <div>
      <div
        style={{
          width: "500px",
          height: "500px",
          background: "gray",
          overflow: "Hidden",
          position: "relative",
        }}
        onClick={onclickImage}
      >
        이미지 선택
        <img
          src={image && `https://storage.googleapis.com/${image}`}
          style={{
            maxHeight: "100%",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            objectFit: "cover",
            objectPosition: "center",
            background: "white",
          }}
          /* onError="this.style.display='none'" */
        />
      </div>

      {/* 속성에 multiple 를 추가하면 여러 파일을 추가할 수 있다 */}
      {/* <img
        src={`https://storage.googleapis.com/${image}`}
        style={{ width: "500px" }}
        onError="this.style.display='none'"
      /> */}

      <input
        type="file"
        ref={fileRef}
        onChange={onChangeFile}
        style={{ display: "none" }}
      />
    </div>
  );
}
