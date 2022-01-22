import { gql, useQuery, useMutation } from "@apollo/client"
import styled  from "@emotion/styled"


const FETCH_PRODUCTS = gql`
  query fetchProducts{
    fetchProducts {
      _id
      seller
      name
      detail
      price
      createdAt
    }
  }

`
const DELETE_PRODUCT = gql`
  mutation deleteProduct($productId: ID){
    deleteProduct(productId: $productId) {
      message
    }
  }

`

const ListPage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const List = styled.div`
  width: 15%;
  padding-left: 5px;
  text-align: center;
`


export default function FetchProductsList() {

  const [deleteProduct] = useMutation(DELETE_PRODUCT)
  const {data} = useQuery(FETCH_PRODUCTS)

  const onClickDelete = (event) => {
    deleteProduct({
      variables: { productId: event.target.id},
      refetchQueries: [{ query: FETCH_PRODUCTS }]
      }
    )
  }

  return(
    <div>
      {data?.fetchProducts.map((el) => (
        <ListPage key={el._id}>
          <input type="checkbox"></input>
          <List>{el.seller}</List>
          <List>{el.name}</List>
          <List>{el.detail}</List>
          <List>{el.price}</List>
          <List>{el.createdAt}</List>
          <button id={el._id} onClick={onClickDelete}>삭제</button>
        </ListPage>
      ))}
    </div>
  )

}