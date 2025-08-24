import React, { Component } from "react";

type State = {
    company: "Rikkei Academy" | "RikkerSoft";
};

export default class Exersice03 extends Component<object, State> {
    constructor(props: object) {
        super(props);
        this.state = {
            company: "Rikkei Academy",
        };
    }

    changeState = () => {
        this.setState((prev) => ({
            company:
                prev.company === "Rikkei Academy" ? "RikkerSoft" : "Rikkei Academy",
        }));
    };

    render() {
        return (
            <>
                <div>Company: {this.state.company}</div>
                <button onClick={this.changeState}>Change State</button>
            </>
        );
    }
}