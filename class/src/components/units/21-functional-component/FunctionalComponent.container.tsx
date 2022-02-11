import FunctionalComponentUI from "./FunctionalComponent.presenter";

export default function FunctionalComponent() {
  // return <div>{FunctionalComponentUI({ count: 100 })}</div>;
  return <FunctionalComponentUI count={2000} />;
  // 컴포넌트 자체가 함수
}
