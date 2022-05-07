import React, { Component } from "react";

class App extends Component {
  state = {
    count: 0,
    isOn: false,
    x: null,
    y: null,
  };

  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  componentDidMount() {
    document.title = `You hava been clicked ${this.state.count} times`;
    window.addEventListener("mousemove", this.handleMouseMove);
  }

  componentDidUpdate() {
    document.title = `You hava been clicked ${this.state.count} times`;
  }

  componentWillUnmount() {
    window.removeEventListener("mousemove", this.handleMouseMove);
  }

  toggleLight = () => {
    this.setState((prevState) => ({
      isOn: !prevState.isOn,
    }));
  };

  handleMouseMove = (event) => {
    this.setState({
      x: event.pageX,
      y: event.pageY,
    });
  };

  render() {
    return (
      <>
        <h2>Counter</h2>
        <button onClick={this.increment}>
          I was clicked {this.state.count} times
        </button>
        <h2> Toggle Light </h2>
        <div
          style={{
            height: "50px",
            width: "50px",
            background: this.state.isOn ? "yellow" : "grey",
          }}
          onClick={this.toggleLight}
        />

        <h2>Mouse Position</h2>
        <p>X Position: {this.state.x} </p>
        <p>Y Position: {this.state.y} </p>
      </>
    );
  }
}

export default App;
