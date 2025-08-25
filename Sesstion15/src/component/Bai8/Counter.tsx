import React, { Component } from "react";

type State = {
    count: number;
};

export default class Count extends Component<object, State> {
    private intervalId?: number;

    constructor(props: object) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    componentDidMount() {
        this.intervalId = window.setInterval(() => {
            this.setState((prevState) => ({
                count: prevState.count >= 10 ? 0 : prevState.count + 1,
            }));
        }, 1000);
    }

    componentWillUnmount() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    }

    render() {
        return (
            <div>
                <h2>Counter: {this.state.count}</h2>
            </div>
        );
    }
}