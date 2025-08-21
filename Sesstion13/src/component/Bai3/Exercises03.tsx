import React, { Component } from "react";

type Staff = {
    id: number;
    name: string;
    age: number;
};

type State = {
    staffList: Staff[];
};

export default class Exercises03 extends Component<object, State> {
    constructor(props: object) {
        super(props);
        this.state = {
            staffList: [
                {
                    id: 1,
                    name: "john",
                    age: 30,
                },
                {
                    id: 2,
                    name: "Mary",
                    age: 25,
                },
                {
                    id: 3,
                    name: "Jane",
                    age: 20,
                },
            ],
        };
    }

    render() {
        return (
            <>
                <table style={{ border: "" }}>
                    <tr>
                        <td>ID</td>
                        <td>NAME</td>
                        <td>AGE</td>
                    </tr>
                    {this.state.staffList.map((staff) => {
                        return (
                            <tr key={staff.id}>
                                <td>{staff.id}</td>
                                <td>{staff.name}</td>
                                <td>{staff.age}</td>
                            </tr>
                        );
                    })}
                </table>
            </>
        );
    }
}