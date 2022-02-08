import { Component, createRef } from "react";
import Router from "next/router";

interface IState {
  count: number;
}

export default class ClassCounterPage extends Component {
  inputRef = createRef<HTMLInputElement>(); // createRef는 react에서 제공하는 기능

  state = {
    count: 0,
  };

  componentDidMount() {
    console.log("마운트 됨");
    this.inputRef.current?.focus(); // input에 cursor가 깜빡 거리게 됨
  }

  componentDidUpdate() {
    console.log("수정되고 다시 그려짐");
  }

  componentWillUnmount() {
    console.log("여기서 나갈래요");
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
        <input type="text" ref={this.inputRef} />
        <div>현재카운트: {this.state.count}</div>
        <button onClick={this.onClickCounter}>카운트 올리기</button>
        <button onClick={this.onClickMove}>나가기</button>
      </div>
    );
  }
}
