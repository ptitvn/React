import { Component } from 'react'

interface Exercises03State {
  theme: string;
  language: string;
}

export default class Exercises07 extends Component<object, Exercises03State> {
  constructor(props: object) {
    super(props);
    this.state = {
      theme: 'light',
      language: 'Vietnamese'
    };
  }

  render() {
    return (
        <div style={{ backgroundColor: this.state.theme === 'light' ? '#fff' : '#333', color: this.state.theme === 'light' ? '#000' : '#fff' }}>
          <p>Nền: {this.state.theme === 'light' ? 'sáng' : 'tối'}</p>
          <p>Ngôn ngữ: {this.state.language === 'Vietnamese' ? 'tiếng việt' : 'tiếng anh'}</p>
        </div>
    
    )
  }
}