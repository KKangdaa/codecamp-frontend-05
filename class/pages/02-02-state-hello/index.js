import { useState } from "react"

export default function StateHello(){

  const [ qqq, setQqq ] = useState("안녕하세요");
  // count는 state 변수 -> qqq
  // setCount는 state를 바꿔주는 함수 -> setQqq
  // useState(10) 는 초기값 -> "안녕하세요"

  function zzz() {
    setQqq("반갑습니다")
  }

  return (
    <div>
      <div>{qqq}</div>
      <button onClick={zzz}>Click</button>
                    {/* ↑ {}는 변수 또는 함수 */}
    </div>
  )
}