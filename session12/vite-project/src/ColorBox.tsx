import { Component } from 'react'
export default class bt4 extends Component {
  render() {


    const color = 'blue';
    const boxStyle = {
        width: '200px',
        height: '200px',
        backgroundColor: color,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        border: '1px solid black',
        fontSize: '24px'
    };

    return (
        <div style={boxStyle}>
            Box
        </div>
    );
  }
}
