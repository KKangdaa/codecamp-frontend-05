export default function FunctionalComponentUI(aaa: any) {
  // props === aaa는 매개변수
  return (
    <div>
      {aaa.child}
      {aaa.age}
    </div>
  );
}
