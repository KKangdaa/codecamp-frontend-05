import { ChangeEvent } from "react";

export interface IBoardWriteUIProps {
  data?: any;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeImages: (event: ChangeEvent<HTMLInputElement>) => void;
  images: string;
  isEdit: any;
  createBoardButton: () => void;
  updateButton: () => void;
}
