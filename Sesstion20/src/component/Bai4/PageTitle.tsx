import React, { useState, useEffect } from "react";

export const PageTitle = () => {
    const [name, setName] = useState("");

    useEffect(() => {
        document.title = name
            ? `Chào mừng bạn đến với ứng dụng của ${name}!`
            : "Chào mừng bạn đến với ứng dụng của chúng tôi!";
    }, [name]);

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
            <h2>Chào mừng bạn đến với ứng dụng của chúng tôi!</h2>
            <input
                type="text"
                placeholder="Nhập tên người dùng"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ display: "block", width: "100%", marginBottom: 10 }}
            />
            <div>Tên người dùng: {name}</div>
        </div>
    );
};