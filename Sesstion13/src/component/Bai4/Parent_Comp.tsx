import React, { Component } from "react";
import Children_Comp from "./Children_Comp";

type Info = {
    name: string;
};

export default class Parent_Comp extends Component<object, Info> {
    constructor(props: object) {
        super(props);
        this.state = {
            name: "Nguyen Minh Son",
        };
    }
    render() {
        return (
            <div>
                Họ và tên bên component cha: {this.state.name}
                <Children_Comp name={this.state.name} />
            </div>
        );
    }
}