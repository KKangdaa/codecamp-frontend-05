/* import { useRouter } from 'next/router'
import { useQurey, gql } from  '@apollo/client'

const FETCH_BOARD = gql`
  query fetchBoard($number: Int){
    fetchBoard(number: $number) {
      writer
      title
      contents
    }
  }
`

export default function DynamicRoutedPage() {

  const router = useRouter()

  const { data } = useQurey(FETCH_BOARD, {
    variables: { number: Number(router.query.aaa) }
  })

  console.log(data)

  return(
    <div>
      <div>{router.query.aaa}번 페이지 이동완료!!!</div>
      <div>작성자: {data?.fetchBoard.writer}</div>
      <div>제목: {data?.fetchBoard.title}</div>
      <div>내용: {data && data.fetchBoard.contents}</div>
      {/* ? = 옵셔널체이닝????? * /}
    </div>
  )
}
*/

import DynamicRouted from "../../../src/components/units/board/write/DynamicRouted.container"


export default function DynamicRoutedPage(){

  return(
    <DynamicRouted />
  )


}