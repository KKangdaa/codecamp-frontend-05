import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useRef, useState } from "react";
import { LikeOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

const ImgBox = styled.div`
  width: 150px;
  height: 150px;
  line-height: 200px;
  overflow: Hidden;
  position: relative;
  display: inline-block;
  margin-right: 10px;
  text-align: center;
`;

const BoxImage = styled.img`
  max-height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  object-fit: cover;
  object-position: center;
  background: white;
`;
const Like = styled(LikeOutlined)`
  font-size: 3rem;
  color: #0004ff;
`;

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

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUpload() {
  const [createBoard] = useMutation(CREATE_BOARD);

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [images, setImages] = useState("");

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
  };

  const CreateButton = async () => {
    try {
      await createBoard({
        variables: {
          createBoardInput: {
            writer,
            password,
            title,
            contents,
            images,
          },
        },
      });
      alert("등록되었습니다");
    } catch (error) {
      console.log(error.message);
    }
  };

  const imgRef = useRef(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onChangeImgfile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    const result = await uploadFile({ variables: { file } });

    setImages(result.data?.uploadFile.url);
  };

  const onClickImage = () => {
    imgRef.current?.click();
  };

  return (
    <div style={{ padding: "50px" }}>
      작성자 : <input type="text" onChange={onChangeWriter} />
      <br />
      비밀번호 : <input type="password" onChange={onChangePassword} />
      <br />
      제목 : <input type="text" onChange={onChangeTitle} />
      <br />
      내용 : <input type="text" onChange={onChangeContents} />
      <br />
      <br />
      <ImgBox>
        <Like onClick={onClickImage} />
        <BoxImage src={images && `https://storage.googleapis.com/${images}`} />
      </ImgBox>
      <input
        type="file"
        ref={imgRef}
        onChange={onChangeImgfile}
        style={{ display: "none" }}
        multiple
      />
      <button onClick={CreateButton}>저장하기</button>
    </div>
  );
}
