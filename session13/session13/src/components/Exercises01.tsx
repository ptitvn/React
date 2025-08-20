import  { Component } from 'react'

interface Exercises01State {
  name: string;
}

export default class Exercises01 extends Component<object, Exercises01State> {
  constructor(props: object) {
    super(props);
    this.state = {
      name: 'Nguyễn Minh Sơn'
    };
  }

  render() {
    return (
      <div>
        <h2>Họ và tên : {this.state.name}</h2>
      </div>
    )   
  }
}
