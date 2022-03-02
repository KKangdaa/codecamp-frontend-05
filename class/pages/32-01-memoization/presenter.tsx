import { memo } from "react";

// 바뀐 값이 props로 넘어오게 되면 리렌더가 됨 (memo가 무시됨)
function MemoizationPresenterPage(props) {
  console.log("프리젠터가 렌더링 됩니다.");

  return (
    <div>
      <div>====================</div>
      <h1>이것은 프리젠터 입니다</h1>
      <div>====================</div>
    </div>
  );
}

export default memo(MemoizationPresenterPage); // 여기서의 memo는 리렌더링 되지 않음
