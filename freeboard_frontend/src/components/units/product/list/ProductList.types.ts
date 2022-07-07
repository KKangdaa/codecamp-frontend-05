export interface IProductListUIProps {
  data: any
  userInfo: any
  onClickMoveToDetail: (el: string) => () => void
  onClickNew: () => void
  onLoadMore: () => void
}
