import axios from 'axios'
import { useState } from 'react'
import { useMutation, gql } from '@apollo/client'
import { IMutation, IMutationCreateBoardArgs } from '../../src/commons/types/generated/types'


const CREATE_BOARD = gql`
  mutation {
    createBoard(writer:"낭콩", title:"nangkong", contents: "Good"){
      _id
      number
      message
    }
  }
`


export default function GraphqlMutation() {

  const [aaa, setAaa] = useState<string>("")
  const [qqq] = useMutation<Pick<IMutation, "createBoard">, IMutationCreateBoardArgs>(CREATE_BOARD)
                          // ↑ 유틸리티 타입(Pick)
  
  

  // 화살표 함수(화살표 함수는 반응이 느릴 수 있음)
  const zzz = async () => {

    // const result = await axios.get("https://koreanjson.com/posts/1")
    const result = await qqq()
    result.data?.createBoard?.message
    console.log(result.data?.createBoard?.message)
    setAaa(result.data?.createBoard?.message || "스트링")

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