import React, { Component } from 'react';

interface State {
  selectedGender: string;
  submittedGender: string;
}

export default class Exersice06 extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      selectedGender: '',
      submittedGender: '',
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ selectedGender: e.target.value });
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.setState({ submittedGender: this.state.selectedGender });
  };

  render() {
    const { selectedGender, submittedGender } = this.state;

    return (
      <form
        onSubmit={this.handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          width: '220px',
          border: '1px solid #ccc',
          padding: '16px',
          borderRadius: '8px',
        }}
      >
        <div style={{ fontWeight: 'bold' }}>
          Giới tính: {submittedGender ? submittedGender : ''}
        </div>

        <label>
          <input
            type="radio"
            name="gender"
            value="Nam"
            checked={selectedGender === 'Nam'}
            onChange={this.handleChange}
          />
          Nam
        </label>

        <label>
          <input
            type="radio"
            name="gender"
            value="Nữ"
            checked={selectedGender === 'Nữ'}
            onChange={this.handleChange}
          />
          Nữ
        </label>

        <label>
          <input
            type="radio"
            name="gender"
            value="Khác"
            checked={selectedGender === 'Khác'}
            onChange={this.handleChange}
          />
          Khác
        </label>

        <button
          type="submit"
          style={{
            height: '32px',
            width: '110px'
          }}
        >
          Submit
        </button>
      </form>
    );
  }
}