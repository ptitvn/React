import React, { Component } from 'react';

interface State {
  birthday: string;
  submitted: boolean;
}

class bt3 extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      birthday: '',
      submitted: false,
    };
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ birthday: event.target.value });
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 
    this.setState({ submitted: true });
  };

  formatDateMMDDYYYY = (isoDate: string): string => {
    const [year, month, day] = isoDate.split('-');
    return `${month}/${day}/${year}`;
  };

  render() {
    const { birthday, submitted } = this.state;

    return (
      <div style={{ fontFamily: 'Arial', padding: '20px' }}>
        <h2 style={{ fontWeight: 'bold', fontSize: '24px' }}>
          Ngày sinh: {submitted && birthday ? birthday : ''}
        </h2>

        <div style={{ border: '1px solid #ccc', padding: '16px', width: '300px' }}>
          <form onSubmit={this.handleSubmit}>
            {!submitted && (
              <>
                <label htmlFor="birthday" style={{ display: 'block', marginBottom: '8px' }}>
                  Ngày sinh:
                </label>
                <input
                  type="date"
                  id="birthday"
                  value={birthday}
                  onChange={this.handleChange}
                  style={{
                    width: '100%',
                    padding: '8px',
                    marginBottom: '12px',
                    boxSizing: 'border-box',
                  }}
                />
              </>
            )}

            {submitted && birthday && (
              <div style={{ marginBottom: '12px', fontSize: '16px' }}>
                {this.formatDateMMDDYYYY(birthday)}
              </div>
            )}

            <button
              type="submit"
              style={{
                padding: '8px 16px',
                backgroundColor: '#007bff',
                color: '#fff',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default bt3;