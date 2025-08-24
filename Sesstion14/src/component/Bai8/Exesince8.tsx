import { Component } from "react";

type User = {
    name: string;
    email: string;
    password: string;
    phone: string;
};

type InitialState = {
    email: string;
    password: string;
    message: string;
};

export default class LoginForm extends Component<{}, InitialState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            email: "",
            password: "",
            message: "",
        };
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        this.setState({ [name]: value } as Pick<InitialState, keyof InitialState>);
    };

    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { email, password } = this.state;

        if (!email || !password) {
            this.setState({ message: "Email và Mật khẩu không được để trống!" });
            return;
        }
        const users = JSON.parse(localStorage.getItem("users") || "[]") as User[];

        const foundUser = users.find(
            (u) => u.email === email && u.password === password
        );

        if (foundUser) {
            this.setState({ message: "Đăng nhập thành công " });
        } else {
            this.setState({ message: "Đăng nhập thất bại " });
        }
    };

    render() {
        return (
            <div style={{ width: "400px", margin: "auto" }}>
                <form onSubmit={this.handleSubmit}>
                    <h2>Đăng nhập tài khoản</h2>

                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <br />

                    <label>Mật khẩu</label>
                    <input
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <br />

                    <button type="submit">Đăng nhập</button>
                </form>

                {this.state.message && (
                    <p style={{ color: "red", marginTop: "10px" }}>{this.state.message}</p>
                )}
            </div>
        );
    }
}