import  { Component } from 'react';

interface State {
  company: string;
}

export default class Exersice03 extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      company: 'Rikkei Academy',
    };
  }

  handleChangeCompany = () => {
    this.setState({ company: 'RikkeiSoft' });
  };

  render() {
    return (
      <div>
        <h2>Company: {this.state.company}</h2>
        <button onClick={this.handleChangeCompany}>Change state</button>
      </div>
    );
  }
}