import { Component } from 'react';
import './LoginStatus.css';


type State = {
    isLoggedIn: boolean;
};

export default class LoginStatus extends Component<object, State> {
    constructor(props: object) {
        super(props);
        this.state = {
            isLoggedIn: false,
        };
    }

    toggleLogin = () => {
        this.setState((prevState) => ({
            isLoggedIn: !prevState.isLoggedIn,
        }));
    };

    render() {
        const { isLoggedIn } = this.state;
        return (
            <div className="login-container">
                <h2 className="login-message">
                    {isLoggedIn ? 'Xin chào, User!' : 'Vui lòng đăng nhập để tiếp tục.'}
                </h2>
                <button className="login-button" onClick={this.toggleLogin}>
                    {isLoggedIn ? 'Đăng xuất' : 'Đăng nhập'}
                </button>
            </div>
        );
    }
}
