import FunctionalComponentUI from "./FunctionalComponent.presenter";

export default function FunctionalComponent() {
  // return <FunctionalComponentUI count={2000} />;
  return <div>{FunctionalComponentUI({ child: "철수", age: 13 })}</div>;
  // 컴포넌트 자체가 함수
}
