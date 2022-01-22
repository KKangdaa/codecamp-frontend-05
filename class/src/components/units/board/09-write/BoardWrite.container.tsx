import axios from 'axios'
import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import BoardWriteUI from './BoardWrite.presenter'
import { CREATE_BOARD, UPDATE_BOARD } from './BoardWrite.queries'



export default function BoardWrite(props) {

  const router = useRouter()

  const [isActive, setIsActive] = useState(false)

  const [writer, setWriter] = useState("")
  const [title, setTitle] = useState("")
  const [contents, setContents] = useState("")

  const [aaa, setAaa] = useState("")
  const [qqq] = useMutation(CREATE_BOARD)
  const [www] = useMutation(UPDATE_BOARD)

  
  const zzz = async () => {

    const result = await qqq({
      variables: {
        writer, 
        title, 
        contents
      }
    })
    console.log(result.data.createBoard.message)
    setAaa(result.data.createBoard.message)


    console.log(result.data.createBoard.number)
    router.push(`/09-01-boards/${result.data.createBoard.number}`)
  }

  const xxx = async () => {
    console.log("수정하기를 클릭하셨군요")

    interface IMyVariables {
      number: number
      writer?: string
      title?: string
      contents?: string
      // ? 값이 없을 수도 있음을 표시
    }

    const myVariables: IMyVariables = {
      number: Number(router.query.mynumber),

    }

    if(writer !== "") myVariables.writer = writer
    if(title !== "") myVariables.title = title
    if(contents !== "") myVariables.contents = contents
    // if문 1줄일 때 {} 생략 가능

    const result = await www({ 
      variables: myVariables
    })
    console.log(result.data.updateBoard.message)
    router.push(`/09-01-boards/${router.query.mynumber}`)
  }


  const onChangeMyWriter = (event) => {
    setWriter(event.target.value)
    if (event.target.value && title && contents) {
      setIsActive(true)
    }
  }
  const onChangeMyTitle = (event) => {
    setTitle(event.target.value)
    if (writer && event.target.value && contents) {
      setIsActive(true)
    }
  }
  const onChangeMyContents = (event) => {
    setContents(event.target.value)
    if (writer && title && event.target.value) {
      setIsActive(true)
    }
  }
  // setState는 비동기로 작동 (event.target.value)

  


  return(
    <BoardWriteUI
      aaa={aaa}
      zzz={zzz}
      xxx={xxx}
      onChangeMyWriter={onChangeMyWriter}
      onChangeMyTitle={onChangeMyTitle}
      onChangeMyContents={onChangeMyContents}
      isActive={isActive}
      isEdit={props.isEdit}
      data={props.data}
    />

  )
}