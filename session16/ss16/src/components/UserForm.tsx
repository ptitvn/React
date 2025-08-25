import React, { Component } from 'react';
import './UserForm.css';


type State = {
    name: string;
    email: string;
    age: string;
    error: string;
    submitted: boolean;
};

export default class UserForm extends Component<object, State> {
    constructor(props: object) {
        super(props);
        this.state = {
            name: '',
            email: '',
            age: '',
            error: '',
            submitted: false,
        };
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        this.setState({ [name]: value } as unknown as Pick<State, keyof State>);
    };

    handleSubmit = () => {
        const { email, age } = this.state;

        if (!email.includes('@')) {
            this.setState({ error: 'Email không hợp lệ', submitted: false });
            return;
        }

        if (Number(age) < 0) {
            this.setState({ error: 'Tuổi không được âm', submitted: false });
            return;
        }

        this.setState({ error: '', submitted: true });
    };

    handleReset = () => {
        this.setState({
            name: '',
            email: '',
            age: '',
            error: '',
            submitted: false,
        });
    };

    render() {
        const { name, email, age, error, submitted } = this.state;

        return (
            <div className="form-container">
                <h2>Nhập thông tin người dùng</h2>
                <input
                    type="text"
                    name="name"
                    placeholder="Họ tên"
                    value={name}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={this.handleChange}
                />


                <input
                    type="number"
                    name="age"
                    placeholder="Tuổi"
                    value={age}
                    onChange={this.handleChange}
                />

                <div className="button-group">
                    <button onClick={this.handleSubmit}>Gửi</button>
                    <button onClick={this.handleReset}>Xóa tất cả</button>
                </div>

                {error && <p className="error">{error}</p>}

                {submitted && (
                    <div className="result">
                        <h3>Thông tin đã nhập:</h3>
                        <p>Họ tên: {name}</p>
                        <p>Email: {email}</p>
                        <p>Tuổi: {age}</p>
                    </div>
                )}
            </div>
        );
    }
}

