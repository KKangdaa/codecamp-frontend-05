export default function TypescriptPage(){
  /* "strict": true */

  // 타입 추론 ( 선언시 타입이 string인지 number인지 추론하여 선언 let aaa:string = "안녕하세요" 표시 필요없음 .ts 파일이기 때문에)
  // let aaa = "안녕하세요"
  // aaa = 3 (error)

  // 문자타입
  // let bbb: string;
  // bbb = "반갑습니다"
  // bbb = 123 (error)

  // 숫자타입
  //let ccc = 5
  // 또는
  // let ccc:number = 5
  // ccc = "asdf" (error)

  // 불린타입
  // let ddd: boolean
  // ddd = true
  // ddd = 123 (error)
  // ddd = "wsaf" (error)

  // 배열타입
  // let eee: number[] = [1, 2, 3, 4, 5, "안녕"] (error)
  // let fff: string[] = ["철수", "영희", "훈이", 123] (error)
  // let ggg: (string | number)[] = [1, 2, 3, 4, "철수", "영희"]
  // let hhh: string[] | number[] = [1, 2, 3]
  // hhh = ["철수", "영희", "훈이"]
  
  // 객체타입(객체는 타입이 없기 때문에 만들어 줘야함)
  // 처음 만들어진 상태에서 타입을 추론하고 그 후 타입 변경 불가

  // interface IProfile {
  //   name: string
  //   age: number | string
  //   school: string
  //   // 타입 선언후 불러와서 사용가능
  // }

  // const profile: IProfile = {
  //   name : "철수",
  //   age : 8,
  //   school : "다람쥐초등학교"
  // }
  // profile.name = 123 (error)
  // profile.school = 123 (error)
  // profile.age = "8살"




  return <div>타입스크립트 연습</div>
}