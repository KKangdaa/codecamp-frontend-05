import { useState } from 'react'
import { useMutation, gql } from '@apollo/client'

const CREATE_BOARD = gql `
  mutation {
    createBoard (createBoardInput: {writer: "낭콩", password: "kong", title:"강낭콩", contents:"콩"}) {
      _id
      writer
      title
      contents
    }
  }
`

export default function GrapgqlMutationBoard() {
  
  const [contents, setContents] = useState("")
  const [createBoard] = useMutation(CREATE_BOARD)
  

  const onClick = async () => {
    const result = await createBoard()
    console.log(result.data.createBoard.message)
    setContents(result.data.createBoard.message)
  }


  return (
    <>
      <button onClick={onClick}>GRAPHQL-API 요청하기</button>
      <div>{contents}</div>
    </>
  )
}