import { ChangeEvent } from "react";

export interface IBoardWriteProps {
  isEdit: boolean;
  data?: any;
}

export interface IBoardWriteUIProps {
  data?: any;
  isEdit: boolean;
  writerError: string;
  writerText: (event: ChangeEvent<HTMLInputElement>) => void;
  passwordError: string;
  passwordText: (event: ChangeEvent<HTMLInputElement>) => void;
  titleError: string;
  titleText: (event: ChangeEvent<HTMLInputElement>) => void;
  contentsError: string;
  contentsText: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  UpdateButton: () => void;
  CreateButton: () => void;
  buttonActive: boolean;

  isModalVisible: boolean;
  onToggleModal: () => void;
  onCompleteDaumPostcode: (data: any) => void;
  address: string;
  zipcode: string;
  youtubeUrlText: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface IButtonActive {
  buttonActive: boolean;
}

export interface ITextInput {
  title?: string;
  contents?: string;
  youtubeUrl?: any;
  boardAddress?: string;
  // address?: any;
  // addressDetail?: any;
}
