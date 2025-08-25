import React, { Component } from 'react'

type State = {
    data: string
}

export default class Exesince3 extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            data: ''
        }
    }

    handleChange = (e: any) => {
        this.setState({ data: e.target.value });
    }

    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>Ngày sinh</h1>
                    <input
                        type="date"
                        value={this.state.data}
                        onChange={this.handleChange}
                    />
                    <button type='submit'>Submit</button>
                </form>
                {this.state.data && (
                    <p>Ngày sinh đã nhập: {this.state.data}</p>
                )}
            </div>
        )
    }
}