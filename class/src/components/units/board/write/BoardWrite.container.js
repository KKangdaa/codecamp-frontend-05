import axios from 'axios'
import { useState } from 'react'
import { useMutation } from '@apollo/client'
import BoardWriteUI from './BoardWrite.presenter'
import { CREATE_BOARD } from './BoardWrite.queries'

export default function BoardWrite() {

  const [ isActive, setIsActive ] = useState(false)

  const [writer, setWriter] = useState("")
  const [title, setTitle] = useState("")
  const [contents, setContents] = useState("")

  const [aaa, setAaa] = useState("")
  const [qqq] = useMutation(CREATE_BOARD)

  
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
      bbb={aaa}
      ccc={zzz}
      ddd={onChangeMyWriter}
      eee={onChangeMyTitle}
      fff={onChangeMyContents}
      isActive={isActive}
    />

  )
}