import Head from 'next/head';
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import BoardListUI from './BoardList.presenter'
import { FETCH_BOARDS } from './BoardList.queries'


export default function BoardList(){
  
  const router = useRouter()

  const { data } = useQuery(FETCH_BOARDS)
  
  function EditFreeboard() {
    router.push(`/boards/new`)
  }
  function onClickMoveToDetail(event) {
    router.push(`/boards/${event.target.id}`)
    // 상세페이지 이동(event.target -> 태그 event.target.id -> 태그에 대한 id 속성)
  }
  


  return (
    <BoardListUI
      data={data}
      Head={Head}
      EditFreeboard={EditFreeboard}
      onClickMoveToDetail={onClickMoveToDetail}
    />
  )
}