import React, { SetStateAction, useEffect, useState } from "react";
import { Upload, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { UploadChangeParam, UploadFile } from "antd/lib/upload/interface";
import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../../commons/types/generated/types";
import _ from "lodash";
import { addFile, deleteFile } from "./functions";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
      _id
    }
  }
`;

interface IPictureWallProps {
  images: string[];
  setImages: (images: SetStateAction<string[]>) => void;
}

export default function PicturesWall(props: IPictureWallProps) {
  const [preview, setPreview] = useState({
    visible: false,
    image: "",
    title: "",
  });
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  useEffect(() => {
    if (props.images.length > 0) {
      const files: UploadFile[] = [];
      props.images.forEach((el, idx) => {
        files.push({
          uid: String(idx),
          name: el,
          url: el,
        });
      });

      setFileList(files);
    }
  }, []);

  const handleCancel = () =>
    setPreview((prev) => {
      return { ...prev, visible: false };
    });

  const handlePreview = (file: UploadFile) => {
    console.log(file);
    if (!file.url) return;
    setPreview({
      visible: true,
      image: file.url,
      title: file.name,
    });
  };

  const handleChange = async ({
    fileList: changedFileList,
  }: UploadChangeParam) => {
    getDebounce(changedFileList);
  };

  const getDebounce = _.debounce(async (changedFileList: UploadFile[]) => {
    if (changedFileList.length === fileList.length) return;

    if (changedFileList.length > fileList.length) {
      addFile(
        fileList,
        changedFileList,
        uploadFile,
        props.setImages,
        setFileList
      );
    } else {
      deleteFile(
        fileList,
        changedFileList,
        props.images,
        props.setImages,
        setFileList
      );
    }
  }, 200);

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  return (
    <>
      <Upload
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
      <Modal
        visible={preview.visible}
        title={preview.title}
        footer={null}
        onCancel={handleCancel}
      >
        <img alt="example" style={{ width: "100%" }} src={preview.image} />
      </Modal>
    </>
  );
}
