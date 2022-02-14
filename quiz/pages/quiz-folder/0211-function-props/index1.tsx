// container 부분

export default function Container() {
  /* return (
    <>
    <Presenter child="철수" />
    </>
    ); */

  // ↓ 함수로 불러오는 방식

  return <div>{Presenter({ child: "철수" })}</div>;
}

// presenter 부분

export default function Presenter(props) {
  return <div>{props.child}</div>;
}
