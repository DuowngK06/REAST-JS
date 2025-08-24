import { Component } from "react";

interface TypeState {
    userName: string;
}

export default class Exersice01 extends Component<object, TypeState> {
    constructor(props: object) {
        super(props);
        this.state = {
            userName: "Nguyễn Hải Dương",
        };
    }

    render() {
        return <div>{this.state.userName}</div>;
    }
}
