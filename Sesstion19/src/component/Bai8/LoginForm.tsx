import React, { useState } from "react";

function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Giả lập call API
        setTimeout(() => {
            alert(`Tên: ${username}, Mật khẩu: ${password}`);
            setLoading(false);
        }, 2000);
    };

    return (
        <div>
            <h2>Đăng nhập</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Tên người dùng</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Nhập tên..."
                    />
                </div>
                <div>
                    <label>Mật khẩu</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Nhập mật khẩu..."
                    />
                </div>
                <button type="submit">Đăng nhập</button>
            </form>
            {loading && <p>⏳ Đang đăng nhập...</p>}
        </div>
    );
}

export default LoginForm;
