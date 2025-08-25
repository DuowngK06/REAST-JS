import React, { Component } from "react";

type State = {
    time: string;
};

export default class Clock extends Component<object, State> {
    private timeId?: number;

    constructor(props: object) {
        super(props);
        this.state = {
            time: new Date().toLocaleTimeString(),
        };
    }

    componentDidMount() {
        this.timeId = window.setInterval(() => {
            this.setState({ time: new Date().toLocaleTimeString() });
        }, 1000);
    }

    componentWillUnmount(): void {
        if (this.timeId) {
            clearInterval(this.timeId);
        }
    }

    render() {
        return (
            <>
                <p>Thời gian hiện tại: {this.state.time}</p>
            </>
        );
    }
}