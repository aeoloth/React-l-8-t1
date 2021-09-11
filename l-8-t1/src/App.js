import React from "react";
import "./App.css";
import Square from "./Square";
import Params from "./Params";

class App extends React.Component {
  state = {
    a: 1,
    h: 2,
  };

  handleChange = ({ a, h }) => {
    this.setState({ a, h });
  };

  render() {
    return (
      <>
        <Square a={this.state.a} h={this.state.h} />
        <Params handleChange={this.handleChange} />
      </>
    );
  }
}

export default App;
