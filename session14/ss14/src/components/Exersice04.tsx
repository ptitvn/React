import{ Component } from 'react';

interface State {
  slogan: string;
  allowRender: boolean;
}

export default class Exersice04 extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      slogan: 'Học code để đi làm',
      allowRender: true,
    };
  }

  handleChangeSlogan = () => {
    this.setState({
      slogan: 'Học code sẽ thành công. Cố lên!!!',
      allowRender: false,
    });
  };

  shouldComponentUpdate(_: object, nextState: State): boolean {
    return nextState.allowRender;
  }

  render() {
    return (
      <div>
        <h3>Slogan: {this.state.slogan}</h3>
        <button onClick={this.handleChangeSlogan}>
          Change state
        </button>
      </div>
    );
  }
}