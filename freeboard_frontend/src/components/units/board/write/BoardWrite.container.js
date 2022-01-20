import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import BoardWriteUI from './BoardWrite.presenter'
import { CREATE_BOARD, UPDATE_BOARD } from './BoardWrite.queries'


export default function BoardWrite(props){

  const router = useRouter()

  const [createBoard] = useMutation(CREATE_BOARD)

  const [turnGreen, setTurnGreen] = useState(false)

  const [createWriter, setCreateWriter] = useState("")
  const [writerError, setWriterError] = useState("")
  const [createPassword, setCreatePassword] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [createTitle, setCreateTitle] = useState("")
  const [titleError, setTitleError] = useState("")
  const [createContents, setCreateContents] = useState("")
  const [contentsError, setContentsError] = useState("")

  
  const [updateBoard] = useMutation(UPDATE_BOARD)


  
  const writerText = (event) => {
    setCreateWriter(event.target.value)
    if (event.target.value && createPassword && createTitle && createContents) {
      setTurnGreen(true)
    } else {
      setTurnGreen(false)
    }
  }
  const passwordText = (event) => {
    setCreatePassword(event.target.value)
    if (createWriter && event.target.value && createTitle && createContents) {
      setTurnGreen(true)
    } else {
      setTurnGreen(false)
    }

  }
  const titleText = (event) => {
    setCreateTitle(event.target.value)
    if (createWriter && createPassword && event.target.value && createContents) {
      setTurnGreen(true)
    } else {
      setTurnGreen(false)
    }
  }
  const contentsText = (event) => {
    setCreateContents(event.target.value)
    if (createWriter && createPassword && createTitle && event.target.value) {
      setTurnGreen(true)
    } else {
      setTurnGreen(false)
    }
  }
   

  const CreateButton = async () => {

    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: createWriter,
            password: createPassword,
            title: createTitle,
            contents: createContents
          }
        }
      })

      router.push(`/boards/${result.data.createBoard._id}`)

    } catch(error) {
      console.log(error.message)
    }

    if(!createTitle) {
      setTitleError("1px solid red")
    } 
    /* else {
      setTitleError("0")
    } */
    if(!createContents) {
      setContentsError("1px solid red")
    }
    if(!createWriter) {
      setWriterError("작성자를 입력하세요")
    }
    if(createPassword.length <= 4 && createPassword.length >= 8) {
      setPasswordError("비밀번호는 4~8자 사이로 입력하세요.")
    } else if(createWriter && createPassword && createTitle && createContents) {
      alert("등록되었습니다")
    }
  }

  const UpdateButton = async () => {
    try {
      await updateBoard({
        variables: {
          updateBoardInput: {
            title: createTitle,
            contents: createContents
          },
          password: createPassword,
          boardId: router.query.aaa
        }
      })
  
      // console.log(result.data.updateBoard._id)
      // console.log(router.query.aaa)
      alert("수정이 완료되었습니다.")
      router.push(`/boards/${router.query.aaa}`)
    } catch(error) {
      alert(error.message);
    }
  }
  

  return (
    <BoardWriteUI
      titleText={titleText}
      titleError={titleError}

      contentsText={contentsText}
      contentsError={contentsError}

      writerText={writerText}
      writerError={writerError}

      passwordText={passwordText}
      passwordError={passwordError}

      CreateButton={CreateButton}
      turnGreen={turnGreen}
      
      isEdit={props.isEdit}
      UpdateButton={UpdateButton}
    />
  )
}