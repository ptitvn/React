import React, { Component } from 'react';

interface State {
    selectedColor: string;
    submittedColor: string;
}

class bt2 extends Component<object, State> {
    constructor(props: object) {
        super(props);
        this.state = {
            selectedColor: '#000000',
            submittedColor: '',
        };
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ selectedColor: event.target.value });
    };

    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        this.setState({ submittedColor: this.state.selectedColor });
    };

    render() {
        const { selectedColor, submittedColor } = this.state;

        return (
            <div style={{ fontFamily: 'Arial', padding: '20px', }}>
                <h2 style={{ fontWeight: 'bold', fontSize: '24px' }}>
                    Color: {submittedColor || ''}
                </h2>

                <h3 style={{ fontWeight: 'bold', fontSize: '18px' }}>Form</h3>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="color" style={{ display: 'block', marginBottom: '8px' }}>
                        Màu sắc
                    </label>
                    <input
                        type="color"
                        id="color"
                        value={selectedColor}
                        onChange={this.handleChange} />
                    <button type="submit">
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default bt2;