import { Component } from 'react'

interface Exercise02State {
  id: number;
  name: string;
  dob: string;
  address: string;
}

export default class Exercise02 extends Component<object, Exercise02State> {
  constructor(props: object) {
    super(props);
    this.state = {
      id: 1,
      name: 'Nguyễn Văn Sơn',
      dob: '20/12/2023',
      address: 'Thanh Xuân, Hà Nội'
    };
  }

  render() {
    return (
      <div>
        <h2>Thông tin cá nhân</h2>
        <div style={{display: 'flex', flexDirection: 'column' , justifyContent: 'center', alignItems: 'flex-start'}}>
            <p>Id: {this.state.id}</p>
            <p>Tên: {this.state.name}</p>
            <p>Ngày sinh: {this.state.dob}</p>
            <p>Địa chỉ: {this.state.address}</p>
        </div>
      </div>
    )
  }
}

