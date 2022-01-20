import Head from 'next/head';
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import BoardListUI from './boardList.presenter'
import { FETCH_BOARDS } from './boardList.queries'


export default function BoardList(){
  
  const router = useRouter()

  const { data } = useQuery(FETCH_BOARDS)
  
  function EditFreeboard() {
    router.push(`/boards/new`)
  }
  function onClickMoveToDetail(event) {
    router.push(`/boards/${event.target.id}`)
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