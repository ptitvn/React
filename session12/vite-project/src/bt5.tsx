import  { Component } from 'react'

export default class bt5 extends Component {
  render() {
    const user = {
        firstName: "Nguyễn Văn",
        lastName: "Nam",
    };

    const formatName = (user: { firstName: string; lastName: string }) => {
        return ` ${user.firstName} ${user.lastName}`;
    };

    return (
        <div>
            <h2 style={{fontFamily: 'Times New Roman'}}>Họ và tên: {formatName(user)}</h2>
        </div>
    );
  }
}
