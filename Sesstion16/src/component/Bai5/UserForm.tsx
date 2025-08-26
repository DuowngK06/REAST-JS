import React, { Component, FormEvent, ChangeEvent } from "react";

type State = {
    name: string;
    email: string;
    age: string;
    error: string;
};

class UserForm extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            name: "",
            email: "",
            age: "",
            error: "",
        };
    }

    handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        this.setState({ [name]: value } as Pick<State, keyof State>);
    };

    handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        this.setState({ error: "" }); // reset lỗi

        if (!this.state.email.includes("@")) {
            this.setState({ error: "Email không hợp lệ" });
            return;
        }

        if (Number(this.state.age) < 0) {
            this.setState({ error: "Tuổi không được âm" });
            return;
        }

        alert(`Thông tin người dùng:
    Họ tên: ${this.state.name}
    Email: ${this.state.email}
    Tuổi: ${this.state.age}`);
    };

    handleReset = () => {
        this.setState({
            name: "",
            email: "",
            age: "",
            error: "",
        });
    };

    render() {
        return (
            <div>
                <h2>📋 Nhập thông tin người dùng</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input
                            type="text"
                            name="name"
                            placeholder="Họ tên"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input
                            type="number"
                            name="age"
                            placeholder="Tuổi"
                            value={this.state.age}
                            onChange={this.handleChange}
                        />
                    </div>

                    {this.state.error && (
                        <p style={{ color: "red" }}>{this.state.error}</p>
                    )}

                    <button type="submit">Gửi</button>
                    <button type="button" onClick={this.handleReset}>
                        Xóa tất cả
                    </button>
                </form>
            </div>
        );
    }
}

export default UserForm;
