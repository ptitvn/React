import { Component } from 'react';


type State = {
  count: number;
};

export default class ClickCounter extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <div className="counter-container">
        <h2>Bạn đã click {this.state.count} lần</h2>
        <button className="click-button" onClick={this.handleClick}>
          Click me
        </button>
      </div>
    );
  }
}

