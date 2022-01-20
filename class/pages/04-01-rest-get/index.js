import axios from 'axios'
import {useState} from 'react'

export default function RestGet() {
  const [aaa, setAaa] = useState("")

  /* 
  async function zzz() {
    const result = await axios.get("https://koreanjson.com/posts/1")
    console.log(result.data.title)
    setAaa(result.data.title)
  }
   */
  

  // 화살표 함수(화살표 함수는 반응이 느릴 수 있음)
  const zzz = async () => {
    const result = await axios.get("https://koreanjson.com/posts/1")
    console.log(result.data.title)
    setAaa(result.data.title)

  }

  zzz()

  return (
    <>
    {/* Fragment */}
      <button onClick={zzz}>REST-API 요청하기!!</button>
      <div>{aaa}</div>
    </>
  )

}