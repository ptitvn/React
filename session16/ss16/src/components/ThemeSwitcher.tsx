import { Component } from 'react';
import './ThemeSwitcher.css';


type State = {
  isDarkMode: boolean;
};

export default class ThemeSwitcher extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      isDarkMode: false,
    };
  }

  toggleTheme = () => {
    this.setState((prevState) => ({
      isDarkMode: !prevState.isDarkMode,
    }));
  };

  render() {
    const { isDarkMode } = this.state;
    const themeClass = isDarkMode ? 'dark' : 'light';

    return (
      <body className={`theme-container ${themeClass}`}>
        <h2>
          {isDarkMode ? 'Chế độ Tối đang bật' : 'Chế độ Sáng đang bật'}
        </h2>
        <button onClick={this.toggleTheme}>Chuyển theme</button>
      </body>
    );
  }
}

