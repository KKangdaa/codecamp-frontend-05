import { useState } from 'react'
import { useMutation, gql } from '@apollo/client'

const CREATE_BOARD = gql `
  mutation createBoard ($createBoardInput: CreateBoardInput!) {
    createBoard (createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`

export default function GrapgqlMutationBoard() {
  
  const [createBoard] = useMutation(CREATE_BOARD)

  const [createWriter, setCreateWriter] = useState("")
  const [createPassword, setCreatePassword] = useState("")
  const [createTitle, setCreateTitle] = useState("")
  const [createContents, setCreateContents] = useState("")

  const onClick = async () => {
    await createBoard({
      variables: {
        createBoardInput: {
          writer: createWriter,
          password: createPassword,
          title: createTitle,
          contents: createContents
        }
      }
    })
  }

  const onChangeCreateWhiter = (event) => {
    setCreateWriter(event.target.value)
  }
  const onChangeCreatePassword = (event) => {
    setCreatePassword(event.target.value)
  }
  const onChangeCreateTitle = (event) => {
    setCreateTitle(event.target.value)
  }
  const onChangeCreateContents = (event) => {
    setCreateContents(event.target.value)
  }


  return (
    <>
      작성자 : <input type="text" onChange={onChangeCreateWhiter} /><br />
      비밀번호 : <input type="password" onChange={onChangeCreatePassword} /><br />
      제목 : <input type="text" onChange={onChangeCreateTitle} /><br />
      내용 : <input type="text" onChange={onChangeCreateContents} /><br />
      <button onClick={onClick}>GRAPHQL-API 요청하기</button>
    </>
  )
}