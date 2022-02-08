import { Component } from "react";
import Router from "next/router";

interface IState {
  count: number;
}

export default class ClassCounterPage extends Component {
  state = {
    count: 0,
  };

  componentDidMount() {
    console.log("마운트 됨");
    // render되면 바로 뜬다
    // input 태그 선택해서 포커스 깜빡거리게 하기
    // render후 한번만 실행됨 (2번 실행 안됨)
  }

  componentDidUpdate() {
    console.log("수정되고 다시 그려짐");
  }

  componentWillUnmount() {
    console.log("여기서 나갈래요");
    // 나가기 전에 마지막으로 할 것들(백엔드 컴퓨터에 채팅방 나감을 알리기)
  }

  onClickCounter = () => {
    console.log(this.state.count);
    this.setState((prev: IState) => ({
      count: prev.count + 1,
    }));
    console.log("카운터를 클릭하셨습니다.");
  };

  onClickMove = () => {
    Router.push("/");
  };

  render() {
    return (
      <div>
        <div>현재카운트: {this.state.count}</div>
        <button onClick={this.onClickCounter}>카운트 올리기</button>
        <button onClick={this.onClickMove}>나가기</button>
        {/* this를 해줘야 class 안에서 onClickMove를 찾아 실행 */}
      </div>
    );
  }
}
