export interface IProductDetailUIProps {
  itemData?: any
  address?: string
  userInfo?: any
  pickData?: any
  onClickDelete: () => void
  onClickMoveToEdit: () => void
  onClickMoveToList: () => void
  onClickPick: () => void
  onClickBasket: () => void
  isModalVisible: boolean
  isModal: boolean
  heart: boolean
  toggleButton2: () => void
  toggleButton: () => void
  onClickUsePoint: () => void
}
