import  { Component } from 'react';

interface State {
  time: string;
}

class bt7 extends Component<object, State> {
  private timerID: ReturnType<typeof setInterval> | undefined;

  constructor(props: object) {
    super(props);
    this.state = {
      time: this.getCurrentTime(),
    };
  }

  getCurrentTime = (): string => {
    const now = new Date();
    return now.toLocaleTimeString('vi-VN', { hour12: false });
  };

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({ time: this.getCurrentTime() });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerID) {
      clearInterval(this.timerID);
    }
  }

  render() {
    return (
      <div style={{ fontFamily: 'Arial', fontSize: '24px', fontWeight: 'bold', padding: '20px' }}>
        Thời gian hiện tại: {this.state.time}
      </div>
    );
  }
}

export default bt7;