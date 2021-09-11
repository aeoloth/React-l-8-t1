import React from "react";

export default class Params extends React.Component {
  state = {
    a: 1,
    h: 2,
  };

  constructor(props) {
    super(props);
  }

  handleClick = () => {
    this.setState((state, props) => {
      const res = {
        a: state.a + 1,
        h: state.h + 1,
      };
      props.handleChange(res);
      return res;
    });
  };

  render() {
    return (
      <div>
        <input
          type="number"
          onChange={(event) => this.setState({ a: +event.target.value })}
        />
        <input
          type="number"
          onChange={(event) => this.setState({ h: +event.target.value })}
        />

        <button onClick={this.handleClick}>
          {this.state.a}*{this.state.h}/2
        </button>
      </div>
    );
  }
}
