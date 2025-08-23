import React, { Component } from 'react';

interface State {
  email: string;
}

export default class bt1 extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      email: '',
    };
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ email: event.target.value });
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 

    const submittedData = { email: this.state.email };
    console.log('Dữ liệu đã submit:', submittedData); 
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Form</label>
          <br />
          <label>Email: </label>
          <input
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}