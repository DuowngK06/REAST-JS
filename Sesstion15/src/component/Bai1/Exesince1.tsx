import React, { Component, ChangeEvent } from 'react';

interface State {
    email: string;
}

export default class Exesince1 extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            email: '',
        };
    }

    handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({ email: e.target.value });
    };

    handleSubmit = () => {
        alert(`Email đã nhập: ${this.state.email}`);
    };

    render() {
        return (
            <div>
                <h1>Form</h1>
                <p>Email</p>
                <input
                    type="email"
                    placeholder="nva@gmail.com"
                    value={this.state.email}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        );
    }
}