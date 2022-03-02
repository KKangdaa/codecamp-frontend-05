export interface IProductDetailUIProps {
  itemData?: any
  userData?: any
  onClickDelete: () => void
  onClickMoveToEdit: () => void
  onClickMoveToList: () => void
  isModalVisible: boolean
  toggleButton: () => void
  onClickUsePoint: () => void
}
