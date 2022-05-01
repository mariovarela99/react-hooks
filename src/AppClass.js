import React, { Component } from "react";

class App extends Component {
  state = {
    count: 0,
  };

  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <button onClick={this.increment}>
        I was clicked {this.state.count} times
      </button>
    );
  }
}

export default App;
