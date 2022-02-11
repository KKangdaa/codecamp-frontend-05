import Head from 'next/head'
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import BoardListUI from './BoardList.presenter'
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from './BoardList.queries'
import { ChangeEvent, MouseEvent, useState } from 'react'
import _ from 'lodash'

export default function BoardList() {
  const router = useRouter()

  const { data, refetch } = useQuery(FETCH_BOARDS)
  const { data: dataBoardCount, refetch: countRefetch } =
    useQuery(FETCH_BOARDS_COUNT)

  const [keyword, setKeyword] = useState('')
  const [clickPage, setClickPage] = useState(1)
  const [startPage, setStartPage] = useState(1)

  const getDebounce = _.debounce((data) => {
    refetch({ page: 1, search: data })
    countRefetch({ search: data })
    setClickPage(1)
    setStartPage(1)
    setKeyword(data)
  }, 300)

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value)
  }

  /* // 검색창에 키워드를 입력하고 검색 버튼을 눌렀을 때 검색됨
  const [keyword, setKeyword] = useState('')
  const [search, setSearch] = useState('')

  const onChangeSearch = (event) => {
    setSearch(event.target.value)
  }

  const onClickSearch = () => {
    refetch({ page: 1, search: search })
    setKeyword(search)
  }
   */
  function EditFreeboard() {
    router.push('/boards/new')
  }
  function onClickMoveToDetail(event: MouseEvent<HTMLInputElement>) {
    router.push(`/boards/${event.currentTarget.id}`)
    // 상세페이지 이동(event.target -> 태그 event.target.id -> 태그에 대한 id 속성)
  }

  return (
    <>
      <BoardListUI
        Head={Head}
        data={data}
        dataBoardCount={dataBoardCount}
        EditFreeboard={EditFreeboard}
        onClickMoveToDetail={onClickMoveToDetail}
        refetch={refetch}
        countRefetch={countRefetch}
        keyword={keyword}
        onChangeSearch={onChangeSearch}
        // onClickSearch={onClickSearch}
        clickPage={clickPage}
        setClickPage={setClickPage}
        startPage={startPage}
        setStartPage={setStartPage}
      />
    </>
  )
}
