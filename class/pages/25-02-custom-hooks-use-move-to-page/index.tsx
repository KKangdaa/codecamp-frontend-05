import { useMoveToPage } from "../../src/components/commons/hooks/useMoveToPage";

export default function CustomHooksUseMoveToPage() {
  const { MoveToPage } = useMoveToPage();

  return (
    <div>
      <div>커스텀 훅 연습! - 페이지이동</div>
      <button onClick={MoveToPage("/board")}>게시판으로 이동</button>
      <button onClick={MoveToPage("/market")}>마켓으로 이동</button>
      <button onClick={MoveToPage("/mypage")}>마이페이지로 이동</button>
    </div>
  );
}
