export interface IProductDetailUIProps {
  itemData?: any
  address?: string
  userData?: any
  pickData?: any
  onClickDelete: () => void
  onClickMoveToEdit: () => void
  onClickMoveToList: () => void
  onClickPick: () => void
  isModalVisible: boolean
  toggleButton: () => void
  onClickUsePoint: () => void
}
