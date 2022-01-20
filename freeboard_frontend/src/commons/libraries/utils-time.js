

//     함수(function) ↓
export const getMyDate = (myDate) => {
  const aaa = new Date(myDate)
  const yyyy = aaa.getFullYear()
  // 년(표시 자릿수로 yyyy로 표시)
  const mm = aaa.getMonth() + 1
  // 월(getonth을 사용할 땐 0월부터 시작하기 때문에 +1을 넣어줘야함)
  const dd = aaa.getDate()
  // 날짜
  const hh = aaa.getHours()
  const mns = aaa.getMinutes()
  
  return `${yyyy}. ${mm}. ${dd}. ${ hh}:${mns}`

  /* 
  aaa.getDay()
  // 요일
    */
}