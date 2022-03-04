import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import JestUnitTestPage from "../../pages/34-03-jest-unit-test-snapshot";

it("컴포넌트가 기존이랑 바뀐게 없는지 비교해보자 - 스냅샷 테스트", () => {
  const result = render(<JestUnitTestPage />);
  expect(result.container).toMatchSnapshot();
  // 없으면 스냅샷을 찍음 // 있으면 기존 스냅샷과 비교함
});

// 스냅샷이 없었기 떄문에 'Snapshots: 1 passed, 1 total' 결과가 나오고
// 폴더 안에 'snapshot'폴더가 생성됨
