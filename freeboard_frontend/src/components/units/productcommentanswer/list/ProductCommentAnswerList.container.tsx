import ProductCommentAnswerListItem from './ProductCommentAnswerList.containerItem'

export default function ProductCommentAnswerList(props) {
  return (
    <div style={{ margin: '20px 0' }}>
      <ProductCommentAnswerListItem
        el={props.el}
        onClickDelete={props.onClickDelete}
      />
    </div>
  )
}
