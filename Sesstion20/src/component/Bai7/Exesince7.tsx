import React, { useReducer } from "react";

function reducer(state: number, action: { type: "increment" | "decrement" }) {
    switch (action.type) {
        case "increment":
            return state + 1;
        case "decrement":
            return state - 1;
        default:
            return state;
    }
}

export const Exersice07 = () => {
    const [count, dispatch] = useReducer(reducer, 0);
    return (
        <div style={{ textAlign: "center", marginTop: 40 }}>
            <div style={{ fontSize: 48, fontWeight: "bold", marginBottom: 24 }}>
                Số đếm: {count}
            </div>
            <button
                onClick={() => dispatch({ type: "increment" })}
                style={{ fontSize: 24, padding: "8px 24px", marginRight: 16 }}
            >
                Tăng
            </button>
            <button
                onClick={() => dispatch({ type: "decrement" })}
                style={{ fontSize: 24, padding: "8px 24px" }}
            >
                Giảm
            </button>
        </div>
    );
};