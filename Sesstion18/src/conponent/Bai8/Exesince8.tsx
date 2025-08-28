import React, { useReducer, useState } from "react";

const initialState = [
    { id: 1, name: "Quét nhà" },
    { id: 2, name: "Giặt quần áo" },
    { id: 3, name: "Code" },
];

// Reducer quản lý state
function reducer(state, action) {
    switch (action.type) {
        case "ADD":
            return [...state, { id: Date.now(), name: action.payload }];
        case "DELETE":
            return state.filter((task) => task.id !== action.payload);
        default:
            return state;
    }
}

function App() {
    const [tasks, dispatch] = useReducer(reducer, initialState);
    const [input, setInput] = useState("");

    // Thêm công việc
    const handleAdd = () => {
        if (input.trim() === "") return;
        dispatch({ type: "ADD", payload: input });
        setInput("");
    };

    // Xóa công việc có confirm
    const handleDelete = (id) => {
        if (window.confirm("Bạn có chắc muốn xóa công việc này?")) {
            dispatch({ type: "DELETE", payload: id });
        }
    };

    return (
        <div style={{ margin: "20px" }}>
            <h2>Danh sách công việc</h2>
            <input
                type="text"
                placeholder="Nhập tên công việc"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleAdd}>Thêm</button>

            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        {task.name}{" "}
                        <button onClick={() => handleDelete(task.id)}>Xóa</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
