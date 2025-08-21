import { Component } from 'react';

interface State {
  slogan: string;
}

export default class Exersice04 extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      slogan: 'Học code để đi làm',
    };
  }

  handleClick = () => {
    this.setState({
      slogan: 'Học code sẽ thành công. Cố lên!!!',
    });
  };

  render() {
    return (
      <div>
        <h2>Slogan: {this.state.slogan}</h2>
        <button onClick={this.handleClick}>Change state</button>
      </div>
    );
  }
}
