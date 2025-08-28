import { useReducer } from "react";

type State = {
    gender: string;
};

export default function InputRadio() {

    const initialState: State = {
        gender: "Nam",
    };

    const genderReducer = (state: State, action: any) => {
        switch (action.type) {
            case "CHANGE":
                return { ...state, gender: action.payload };
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(genderReducer, initialState);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: "CHANGE", payload: e.target.value });
    };

    return (
        <div>
            <h3>Chọn giới tính:</h3>
            <label>
                <input
                    type="radio"
                    name="gender"

                    onChange={handleChange}
                />
                Nam
            </label>
            <br />
            <label>
                <input
                    type="radio"
                    name="gender"

                    onChange={handleChange}
                />
                Nữ
            </label>
            <br />
            <label>
                <input
                    type="radio"
                    name="gender"

                    onChange={handleChange}
                />
                Khác
            </label>

            <h2>Selected gender: {state.gender}</h2>
        </div>
    );
}