import { FetchResult } from "@apollo/client";
import { UploadFile } from "antd/lib/upload/interface";
import { SetStateAction } from "react";
import { IMutation } from "../../../../commons/types/generated/types";

export const checkDuplication = (
  fileList: UploadFile[],
  newFile: UploadFile
) => {
  return fileList.filter((el) => el.name === newFile.name).length > 0;
};

export const addFile = async (
  fileList: UploadFile[],
  changedFileList: UploadFile[],
  uploadFile: ({}) => Promise<
    FetchResult<
      Pick<IMutation, "uploadFile">,
      Record<string, any>,
      Record<string, any>
    >
  >,
  setImages: (images: SetStateAction<string[]>) => void,
  setFileList: (files: SetStateAction<UploadFile[]>) => void
) => {
  const newFile = changedFileList.filter((el) => !fileList.includes(el))[0];
  if (checkDuplication(fileList, newFile)) return;
  if (fileList.filter((el) => el.name === newFile.name).length > 0) {
    console.log("중복");
    return;
  }
  const result = await uploadFile({
    variables: { file: newFile.originFileObj },
  });
  if (result?.data?.uploadFile?.url && result?.data?.uploadFile?._id) {
    setFileList((prev) => [
      ...prev,
      {
        ...newFile,
        status: "done",
        uid: result.data!.uploadFile.url,
        url: "https://storage.googleapis.com/" + result.data!.uploadFile.url,
      },
    ]);
    setImages((prev) => [...prev, `${result.data!.uploadFile.url}`]);
  }
};

export const deleteFile = (
  fileList: UploadFile[],
  changedFileList: UploadFile[],
  images: string[],
  setImages: (images: SetStateAction<string[]>) => void,
  setFileList: (fileList: SetStateAction<UploadFile[]>) => void
) => {
  const deletedId = fileList
    .map((el) => {
      return !changedFileList.includes(el) ? el.uid : "";
    })
    .filter((el) => {
      return el;
    })[0];

  setImages(images.filter((el) => !(el === deletedId)));
  setFileList(changedFileList);
};
