import React, { Component } from 'react';

interface State {
    progress: number;
    submitted: boolean;
}

class bt4 extends Component<object, State> {
    constructor(props: object) {
        super(props);
        this.state = {
            progress: 0,
            submitted: false,
        };
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ progress: parseInt(event.target.value, 10) });
    };

    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        this.setState({ submitted: true });
    };

    render() {
        const { progress, submitted } = this.state;

        return (
            <div style={{ fontFamily: 'Arial', padding: '20px' }}>
                <h2>
                    Tiến độ hoàn thành: {submitted ? `${progress} %` : '%'}
                </h2>

                <form onSubmit={this.handleSubmit}>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={progress}
                        onChange={this.handleChange}
                    />
                  
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default bt4;