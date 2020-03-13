import React, { Component } from "react";
import "./App.css";
import Home from "./Home";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  refreshChild() {
    return e => {
      this.setState({
        childText: "这是父组件传给子组件的数据"
      });
    };
  }
  render() {
    console.log(this);
    return (
      <div className="App">
        <button onClick={this.refreshChild()}>父组件更新子组件</button>
        <Home text={this.state.childText} />
      </div>
    );
  }
}

export default App;
