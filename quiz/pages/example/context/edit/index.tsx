import ExampleWrite from "../../../../src/components/example/write/WritePage";
import { createContext } from "react";

export const ExampleContext = createContext(false);
export default function ExampleEdit() {
  return (
    // Provider(제공해주는 사람) : 아래에 있는 모든 컴포넌트들에게 데이터를 제공
    <ExampleContext.Provider value={{ isEdit: true }}>
      <ExampleWrite />
    </ExampleContext.Provider>
  );
}
