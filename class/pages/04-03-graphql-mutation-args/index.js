// import axios from 'axios'
import { useState } from 'react'
import { useMutation, gql } from '@apollo/client'


const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {

    createBoard(writer: $writer, title: $title, contents: $contents){
      _id
      number
      message
    }

  }
`


export default function GraphqlMutationArgs() {
  const [aaa, setAaa] = useState("")
  const [qqq] = useMutation(CREATE_BOARD)
  
  

  // 화살표 함수(화살표 함수는 반응이 느릴 수 있음)
  const zzz = async () => {

    // const result = await axios.get("https://koreanjson.com/posts/1")
    const result = await qqq({
      variables: {
        writer:"낭콩", 
        title:"nangkong", 
        contents: "Good"
      }
    })
    console.log(result.data.createBoard.message)
    setAaa(result.data.createBoard.message)

    // console.log(result.data.title)
    // setAaa(result.data.title)

  }


  return (
    <> {/* Fragment */}
      <button onClick={zzz}>GRAPHQL-API 요청하기!!</button>
      <div>{aaa}</div>
    </>
  )

}