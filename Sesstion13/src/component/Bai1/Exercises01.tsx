import React, { Component } from "react";

type Info = {
    fullName?: string;
};

export default class Exercises01 extends Component<object, Info> {
    constructor(props: object) {
        super(props);
        this.state = {
            fullName: "Nguyen Minh Son",
        };
    }

    render() {
        return <div>Họ và Tên: {this.state.fullName}</div>;
    }