import { Component, createRef } from "react";

type User = {
    name: string;
    email: string;
    password: string;
    phone: string;
};

type InitialState = {
    user: User;
    message: string;
};

export default class RegisterForm extends Component<{}, InitialState> {

    nameRef = createRef<HTMLInputElement>();

    constructor(props: {}) {
        super(props);
        this.state = {
            user: {
                name: "",
                email: "",
                password: "",
                phone: "",
            },
            message: "",
        };
    }

    componentDidMount() {
        this.nameRef.current?.focus();
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        this.setState({
            user: {
                ...this.state.user,
                [name]: value,
            },
        });
    };

    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const { name, email, password, phone } = this.state.user;

        if (!name || !email || !password) {
            this.setState({ message: "Tên sinh viên, Email và Mật khẩu không được để trống!" });
            return;
        }
        const users = JSON.parse(localStorage.getItem("users") || "[]") as User[];

        if (users.some((u) => u.email === email)) {
            this.setState({ message: "Email đã tồn tại!" });
            return;
        }

        users.push({ name, email, password, phone });
        localStorage.setItem("users", JSON.stringify(users));

        this.setState({
            user: { name: "", email: "", password: "", phone: "" },
            message: "Đăng ký tài khoản thành công ",
        });

        this.nameRef.current?.focus();
    };

    render() {
        return (
            <div style={{ width: "400px", margin: "auto" }}>
                <form onSubmit={this.handleSubmit}>
                    <h2>Đăng ký tài khoản</h2>

                    <label>Tên sinh viên</label>
                    <input
                        ref={this.nameRef}
                        type="text"
                        name="name"
                        value={this.state.user.name}
                        onChange={this.handleChange}
                    />
                    <br />

                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={this.state.user.email}
                        onChange={this.handleChange}
                    />
                    <br />

                    <label>Mật khẩu</label>
                    <input
                        type="password"
                        name="password"
                        value={this.state.user.password}
                        onChange={this.handleChange}
                    />
                    <br />

                    <label>Số điện thoại</label>
                    <input
                        type="text"
                        name="phone"
                        value={this.state.user.phone}
                        onChange={this.handleChange}
                    />
                    <br />

                    <button type="submit">Đăng ký</button>
                </form>
                {this.state.message && (
                    <p style={{ color: "red", marginTop: "10px" }}>{this.state.message}</p>
                )}
            </div>
        );
    }
}