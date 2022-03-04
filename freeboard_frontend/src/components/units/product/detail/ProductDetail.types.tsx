export interface IProductDetailUIProps {
  lat?: number
  lng?: number
  itemData?: any
  address?: string
  userData?: any
  onClickDelete: () => void
  onClickMoveToEdit: () => void
  onClickMoveToList: () => void
  isModalVisible: boolean
  toggleButton: () => void
  onClickUsePoint: () => void
}
