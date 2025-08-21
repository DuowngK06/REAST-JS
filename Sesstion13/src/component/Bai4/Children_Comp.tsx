import React, { Component } from "react";

export type ChildrenProps = {
    name?: string;
};

export default class Children_Comp extends Component<ChildrenProps> {
    render() {
        return <div>Họ và tên bên component con: {this.props.name}</div>;
    }
}