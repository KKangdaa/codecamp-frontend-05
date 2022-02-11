import BoardWritePresenter from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD, UPLOAD_FILE } from "./BoardWrite.queries";
import { useMutation } from "@apollo/client";
import { useRef, useState } from "react";
import { useRouter } from "next/router";

export default function BoardWriteContainer(props) {
  const router = useRouter();

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [images, setImages] = useState("");
  // const imageRef = useRef(null);

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const onChangeContents = (event) => {
    setContents(event.target.value);
  };
  const onChangeImages = async (event) => {
    const file = event.target.files?.[0];

    try {
      const result = await uploadFile({ variables: { file } });
      setImages(result.data?.uploadFile.url);
    } catch (error) {
      console.log(error.message);
    }
  };

  const createBoardButton = async () => {
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
      router.push("/boards");
    } catch (error) {
      console.log(error.message);
    }
  };

  const updateButton = async () => {
    const UpdateVariables = {};

    if (title) UpdateVariables.title = title;
    if (contents) UpdateVariables.contents = contents;
    if (images) UpdateVariables.images = images;

    try {
      await updateBoard({
        variables: {
          boardId: router.query.page,
          password,
          updateBoardInput: { title, contents, images },
        },
      });
      router.push("/boards");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <BoardWritePresenter
      data={props.data}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onChangeImages={onChangeImages}
      images={images}
      // imageRef={imageRef}
      isEdit={props.isEdit}
      createBoardButton={createBoardButton}
      updateButton={updateButton}
    />
  );
}
