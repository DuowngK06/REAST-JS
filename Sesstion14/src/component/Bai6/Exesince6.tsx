import { Component } from "react";

type InitialState = {
    gender: string;
    selectedGender: string;
};

export default class GenderForm extends Component<{}, InitialState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            gender: "",
            selectedGender: "",
        };
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ selectedGender: e.target.value });
    };

    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        this.setState({ gender: this.state.selectedGender });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>Chọn giới tính</h1>

                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="Nam"

                            onChange={this.handleChange}

                        />
                        Nam
                    </label>
                    <br />

                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="Nữ"

                            onChange={this.handleChange}
                        />
                        Nữ
                    </label>
                    <br />

                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="Khác"

                            onChange={this.handleChange}
                        />
                        Khác
                    </label>
                    <br />

                    <button type="submit">Submit</button>
                </form>

                {this.state.gender && (
                    <p>
                        <strong>Giới tính đã chọn:</strong> {this.state.gender}
                    </p>
                )}
            </div>
        );
    }
}