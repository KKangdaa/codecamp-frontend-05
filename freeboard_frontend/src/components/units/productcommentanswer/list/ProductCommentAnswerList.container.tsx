import ProductCommentAnswerListItem from './ProductCommentAnswerList.containerItem'

export default function ProductCommentAnswerList(props) {
  return (
    <div>
      <ProductCommentAnswerListItem
        el={props.el}
        onClickDelete={props.onClickDelete}
      />
    </div>
  )
}
