import React, { Component } from "react";

type SateType = {
    slogan: string;
};

export default class Exersice04 extends Component<object, SateType> {
    constructor(props: object) {
        super(props);
        this.state = {
            slogan: "Học code để làm gì",
        };
    }

    shouldComponentUpdate() {
        return false;
    }

    changeSlogan = () => {
        this.setState({
            slogan: "Học code sẽ thành công. Cố lên !!!",
        });

        console.log("Change: ", this.state.slogan);
    };

    render() {
        return (
            <>
                <div>Slogan: {this.state.slogan}</div>
                <button onClick={this.changeSlogan}>Change state</button>
            </>
        );
    }
}