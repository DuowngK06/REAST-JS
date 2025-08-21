import React, { Component } from "react";

type Info = {
    id: number;
    name: string;
    birthDay: string;
    location: string;
};

export default class Exercises02 extends Component<object, Info> {
    constructor(props: object) {
        super(props);
        this.state = {
            id: 1,
            name: "Nguyen Van Son",
            birthDay: "12/12/1990",
            location: "Hà Đông, Hà Nội",
        };
    }

    render() {
        return (
            <>
                <b>Thông tin cá nhân</b>
                <p>ID: {this.state.id}</p>
                <p>Tên: {this.state.name}</p>
                <p>Ngày sinh: {this.state.birthDay}</p>
                <p>Địa chỉ: {this.state.location}</p>
            </>
        );
    }
}