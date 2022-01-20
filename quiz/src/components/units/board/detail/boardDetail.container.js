import { useRouter } from "next/router";
import { useQuery } from "@apollo/client"
import BoardDetailUI from "./boardDetail.presenter";
import { FETCH_BOARD } from "./boardDetail.queries"

export default function BoardDetail() {
  
  const router = useRouter()

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.aaa
    }
  })

  console.log(router.query)

  const onClickEditPage = () => {
    router.push(`/boards/${router.query.aaa}/edit`)
  }

  return (
    <BoardDetailUI 
      data={data}
      onClickEditPage={onClickEditPage}
    />
  )
}