import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from "firebase/firestore/lite";

import { firebaseApp } from "../_app";

export default function FirebasePage() {
  const onClickSubmit = async () => {
    // firebase에 한줄 등록하기
    const board = collection(getFirestore(firebaseApp), "board");
    /* collection(접속정보, 컬렉션이름) // 컬렉션 => 클래스명..? */
    await addDoc(board, {
      writer: "낭콩",
      title: "강아지에요",
      contents: "치와와입니다",
    });
  };
  const onClickFetch = async () => {
    // firebase에서 데이터 꺼내오기
    const board = collection(getFirestore(firebaseApp), "board");
    const result = await getDocs(board);
    const docs = result.docs.map((el) => el.data());
    console.log(docs);
  };

  return (
    <div>
      <h1>파이어베이스 연습 페이지 입니다.</h1>
      <button onClick={onClickSubmit}>등록하기</button>
      <button onClick={onClickFetch}>조회하기</button>
    </div>
  );
}
