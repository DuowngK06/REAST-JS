import React, { useReducer } from "react";

type State = {
    name: string;
    email: string;
};

type Action = {
    field: keyof State;
    value: string;
};

function reducer(state: State, action: Action): State {
    return {
        ...state,
        [action.field]: action.value,
    };
}

export const UserForm = () => {
    const [state, dispatch] = useReducer(reducer, { name: "", email: "" });
    return (
        <div
            style={{
                background: "#f5f5f5",
                padding: 20,
                borderRadius: 8,
                maxWidth: 400,
                margin: "0 auto",
            }}
        >
            <h2 style={{ textAlign: "center", marginBottom: 20 }}>
                User Information Form
            </h2>
            <div style={{ marginBottom: 12 }}>
                <label>Tên:</label>
                <input
                    type="text"
                    value={state.name}
                    onChange={(e) => dispatch({ field: "name", value: e.target.value })}
                    style={{ width: "100%", padding: 8, marginTop: 4 }}
                />
            </div>
            <div style={{ marginBottom: 12 }}>
                <label>Email:</label>
                <input
                    type="email"
                    value={state.email}
                    onChange={(e) => dispatch({ field: "email", value: e.target.value })}
                    style={{ width: "100%", padding: 8, marginTop: 4 }}
                />
            </div>
            <div
                style={{
                    background: "#f7f9fa",
                    padding: 12,
                    borderRadius: 6,
                    marginTop: 16,
                }}
            >
                <strong>Thông tin người dùng:</strong>
                <div>Tên: {state.name || "(Chưa nhập)"}</div>
                <div>Email: {state.email || "(Chưa nhập)"}</div>
            </div>
        </div>
    );
};