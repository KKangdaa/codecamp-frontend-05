import { MouseEvent } from "react";

export interface IBoardListUIProps {
  data?: any;
  toggle: boolean;
  onClickItem: (event: MouseEvent<HTMLInputElement>) => void;
  isModalVisible: boolean;
  toggleDelete: () => void;
  onClickDelete: (event: MouseEvent<HTMLInputElement>) => void;
  onLoadMore: () => void;
  onClickMoveToEdit: (event: MouseEvent<HTMLInputElement>) => void;
}
