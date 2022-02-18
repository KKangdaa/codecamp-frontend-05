import { useRouter } from "next/router";
import { useState } from "react";

/* 
interface AAA {
  name: string;
  age: number;
}
interface AAA {
  school: string;
}
// 선언병합 : 선언한 것들을 병합함
*/

type IPage = "/board" | "/market" | "/mypage";

export function useMoveToPage() {
  const router = useRouter();
  const [visitedPage, setVisitedPage] = useState("");

  const MoveToPage = (page: IPage) => () => {
    setVisitedPage(page);
    router.push(page);
  };

  return { MoveToPage, visitedPage };
}
