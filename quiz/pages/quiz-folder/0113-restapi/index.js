import axios from 'axios'
import { useState } from 'react'

export default function restApi() {
  
  const yochung =  async () => {

    const result = await axios.get('https://koreanjson.com/users')

  }

  console.log(yochung)

  return(
    <>
      <button onClick={yochung}>REST-API 요청하기</button>   
    </>
  )
}