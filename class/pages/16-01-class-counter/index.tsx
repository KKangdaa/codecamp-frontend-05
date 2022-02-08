import { Component } from "react";

interface IState {
  count: number;
}

export default class ClassCounterPage extends Component {
  // Component를 import해와서 안에 있는 기능들을 모두 상속시킨다.(extends)

  state = {
    count: 0,
  };

  // onClickCounter() {
  //   console.log(this.state.count); // this = 동적 this (여기서의 this는 window를 가르킴)
  //   // 아래서 버튼을 클릭하는 순간 this는 window로 바뀌게 된다
  //   // onClickCounter() {}안에 this를 사용할 경우 this는 동적이지만 화살표 함수로 사용할 경우 this는 렉시컬 this가 된다

  //   console.log("카운터를 클릭하셨습니다.");
  // }
  onClickCounter = () => {
    console.log(this.state.count);
    this.setState((prev: IState) => ({
      // count: this.state.count + 1
      count: prev.count + 1,
    }));
    // extends Component 상속 받았기 때문에 setState를 사용할 수 있다
    console.log("카운터를 클릭하셨습니다.");
  };

  render() {
    // render는 html을 작성하는 곳
    return (
      <div>
        <div>현재카운트: {this.state.count}</div> {/* this는 class 자기 자신 */}
        {/* <button onClick={this.onClickCounter.bind(this)}>카운트 올리기</button> */}
        <button onClick={this.onClickCounter}>카운트 올리기</button>
        {/* bind는 동적 this가 정적으로 바뀜 */}
      </div>
    );
  }
}
// this가 바뀌지 않으려면 .bind(this) 또는 onClickCounter() {} 를 화살표 함수로 사용해야한다
