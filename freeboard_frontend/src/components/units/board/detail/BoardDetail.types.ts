export interface IBoardDetailUIProps {
  fetchBoardData?: any;
  onClickEditPage: () => void;
  onClickDelete: () => void;
  onClickListPage: () => void;
  onClickLike: () => void;

  isModalVisible: boolean;
  toggleButton: any;
}
