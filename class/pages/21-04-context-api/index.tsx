import { createContext } from "react";
import BoardWriteContext from "../../src/components/units/21-context-api/BoardWrite.container";

export const ExampleContext = createContext(null);

export default function ContextAPIPage() {
  return (
    <ExampleContext.Provider value={{ isEdit: true }}>
      <BoardWriteContext />
    </ExampleContext.Provider>
  );
}
