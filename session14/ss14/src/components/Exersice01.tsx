import { Component } from 'react'

export default class Exersice01 extends Component<object, { userName: string }> {
  constructor(props: object) {
    super(props)
    this.state = {
      userName: 'Nguyễn Văn A'
    }
  }

  render() {
    return (
      <div>{this.state.userName}</div>
    )
  }
}
