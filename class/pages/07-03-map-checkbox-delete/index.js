import { gql, useQuery, useMutation } from '@apollo/client'
import styled from '@emotion/styled'

const FETCH_BOARDS = gql`
  query fetchBoards{
    fetchBoards {
      number
      writer
      title
      createdAt
    }
  }
`
const DELETE_BOARD = gql`
  mutation deleteBoard($number: Int){
    deleteBoard(number: $number){
      message
    }
  }
`

const Row = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
`
const Column = styled.div`
  width: 20%;
`


export default function MapCheckboxDeletePage(){
  const [deleteBoard] = useMutation(DELETE_BOARD)
  const { data } = useQuery(FETCH_BOARDS)

  const onClickDelete = (event) => {
    // event.target.id ( <button id={el.number} /> 에서 값을 불러옴 )

    deleteBoard({
      variables: { number: Number(event.target.id) },
      refetchQueries: [{ query: FETCH_BOARDS }]
    })
  }

  return(
    <div>
      {data?.fetchBoards.map((el) => (
        // map 사용시 주의 {data?.fetchBoards.map((el, index) => (<Row key={index}>))}로 할 경우 체크박스의 체크는 사라지지않음
        <Row key={el.number}>
          <Column><input type="checkbox" /></Column>
          <Column>{el.number}</Column>
          <Column>{el.title}</Column>
          <Column>{el.writer}</Column>
          <Column>{el.createdAt}</Column>
          <Column><button id={el.number} onClick={onClickDelete}>삭제</button></Column>
        </Row>
      ))}
    </div>
  )
}