import React, { Component } from "react";

//counter component

class Counter extends Component {
  state = { count: 0 };

  render() {
    return (
      <React.Fragment>
        <span>Hello World</span>
        <button>increment</button>
      </React.Fragment>
    );
  }
}

export default Counter;
