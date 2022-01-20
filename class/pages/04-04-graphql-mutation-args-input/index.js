import axios from 'axios'
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


export default function GraphqlMutationArgsInput() {
  const [myWriter, setMyWriter] = useState("")
  const [myTitle, setMyTitle] = useState("")
  const [myContents, setMyContents] = useState("")


  const [aaa, setAaa] = useState("")
  const [qqq] = useMutation(CREATE_BOARD)

  
  

  // 화살표 함수(화살표 함수는 반응이 느릴 수 있음)
  const zzz = async () => {

    // const result = await axios.get("https://koreanjson.com/posts/1")
    const result = await qqq({
      variables: {
        writer: myWriter, 
        title: myTitle, 
        contents: myContents
      }
    })
    console.log(result.data.createBoard.message)
    setAaa(result.data.createBoard.message)

    // console.log(result.data.title)
    // setAaa(result.data.title)

  }

  const onChangeMyWriter = (event) => {
    setMyWriter(event.target.value)
  }
  const onChangeMyTitle = (event) => {
    setMyTitle(event.target.value)
  }
  const onChangeMyContents = (event) => {
    setMyContents(event.target.value)
  }

  return (
    <> {/* Fragment */}
      작성자: <input type="text" onChange={onChangeMyWriter} /><br />
      제목: <input type="text" onChange={onChangeMyTitle} /><br />
      내용: <input type="text" onChange={onChangeMyContents} /><br />
      <button onClick={zzz}>GRAPHQL-API 요청하기!!</button>
      <div>{aaa}</div>
    </>
  )

}