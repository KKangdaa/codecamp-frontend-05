//     함수(function) ↓
export const getMyDate = (myDate) => {
  const aaa = new Date(myDate);
  const yyyy = aaa.getFullYear();
  // 년(표시 자릿수로 yyyy로 표시)
  const mm = aaa.getMonth() + 1;
  // 월(getMonth)을 사용할 땐 0월부터 시작하기 때문에 +1을 넣어줘야함)
  const dd = aaa.getDate();
  // 날짜

  return `${yyyy}-${mm}-${dd}`;
};

export const getMyDateTime = (myDate) => {
  const aaa = new Date(myDate);
  const yyyy = aaa.getFullYear();
  const mm = aaa.getMonth() + 1;
  const dd = aaa.getDate();
  const hh = String(aaa.getHours().padStart(2, "0"));
  const mns = aaa.getMinutes();

  return `${yyyy}. ${mm}. ${dd}. ${hh}:${mns}`;
};
