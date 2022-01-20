import { gql, useQuery } from '@apollo/client'
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

const Row = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
`
const Column = styled.div`
  width: 20%;
`


export default function MapCheckboxPage(){

  const { data } = useQuery(FETCH_BOARDS)
  // useQuery는 비동기 방식 (데이터를 다 받고 렌더링 하기 때문에 data?로 적용시켜 데이터가 채워진 후 렌더링 시킨다)
  // data는 1줄일 경우 변경이 어렵지만 2줄 이상은 data: aaa 등으로 변경이 가능하다
  // data = global state

  return(
    <div>
      {data?.fetchBoards.map((el) => (
        <Row>
          <Column><input type="checkbox" /></Column>
          <Column>{el.number}</Column>
          <Column>{el.title}</Column>
          <Column>{el.writer}</Column>
          <Column>{el.createdAt}</Column>
        </Row>
      ))}
    </div>
  )
}