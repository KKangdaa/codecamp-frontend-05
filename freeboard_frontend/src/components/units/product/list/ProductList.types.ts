export interface IProductListUIProps {
  data: any
  onClickMoveToDetail: (el: string) => () => void
  onClickNew: () => void
  onLoadMore: () => void
}
