import React, { Component, createRef } from 'react';

interface State {
    name: string;
    email: string;
    password: string;
    phone: string;
    message: string;
    emailList: string[];
}

export default class Exersice07 extends Component<object, State> {
    nameInputRef = createRef<HTMLInputElement>();

    constructor(props: object) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            phone: '',
            message: '',
            emailList: [],
        };
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        this.setState({ [name]: value } as unknown as Pick<State, keyof State>);
    };

    handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const { name, email, password, phone, emailList } = this.state;

        if (!name || !email || !password) {
            this.setState({ message: 'Vui lòng nhập đầy đủ Tên, Email và Mật khẩu.' });
            return;
        }

        if (emailList.includes(email)) {
            this.setState({ message: 'Email đã tồn tại. Vui lòng dùng email khác.' });
            return;
        }

        const studentData = { name, email, password, phone };
        localStorage.setItem('studentData', JSON.stringify(studentData));

        this.setState(prevState => ({
            emailList: [...prevState.emailList, email],
            name: '',
            email: '',
            password: '',
            phone: '',
            message: 'Đăng ký tài khoản thành công!',
        }), () => {
            this.nameInputRef.current?.focus();
        });
    };

    render() {
        const { name, email, password, phone, message } = this.state;

        return (
            <form
                onSubmit={this.handleSubmit}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '200px',
                    border: '1px solid #ccc',
                    padding: '16px',
                    borderRadius: '8px',
                    gap: '12px',
                }}
            >
                <h3>Đăng ký tài khoản</h3>
                <div>
                    <p>Tên sinh viên</p>
                    <input
                        ref={this.nameInputRef}
                        type="text"
                        name="name"
                        placeholder="Tên sinh viên"
                        value={name}
                        onChange={this.handleChange}
                    />
                </div>

                <div>
                    <p>Email</p>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={this.handleChange}
                    />
                </div>

                <div>
                    <p>Mật Khẩu</p>
                    <input
                        type="password"
                        name="password"
                        placeholder="Mật khẩu"
                        value={password}
                        onChange={this.handleChange}
                    />
                </div>

                <div >
                    <p>Số điện thoại</p>
                    <input
                        type="text"
                        name="phone"
                        placeholder="Số điện thoại"
                        value={phone}
                        onChange={this.handleChange}
                    />
                </div>
                <button
                    type="submit"
                    style={{
                        width: '170px',
                        height: '36px',
                        backgroundColor: '#3291f5',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                    }}
                >
                    Đăng ký
                </button>

                {message && (
                    <div style={{ marginTop: '8px', color: message.includes('thành công') ? 'green' : 'red' }}>
                        {message}
                    </div>
                )}
            </form>
        );
    }
}