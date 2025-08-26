import React, { Component } from 'react'

export default class SubjectList extends Component {
    Subjects: string[] = ["Toán", "Văn", "Anh", "Vật Lý"];
    render() {
        return (
            <div >
                <h2>danh sach mon hoc</h2>
                <ul>
                    {this.Subjects.map((subject, index) => (
                        <li key={index}>{subject}</li>
                    )
                    )}
                </ul>
            </div>
        )
    }
}