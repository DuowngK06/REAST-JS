import React, { useRef, useEffect, useState } from "react";

export const Exersice06 = () => {
    const [open, setOpen] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (open && inputRef.current) {
            inputRef.current.focus();
        }
    }, [open]);

    return (
        <div style={{ textAlign: "center", marginTop: 40 }}>
            <h2>Ứng dụng React với Modal và Focus Input</h2>
            <button
                onClick={() => setOpen(true)}
                style={{
                    background: "#4caf50",
                    color: "#fff",
                    border: "none",
                    padding: "6px 16px",
                    borderRadius: 4,
                }}
            >
                Mở Modal
            </button>
            {open && (
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "100vh",
                        background: "rgba(0,0,0,0.5)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <div
                        style={{
                            background: "#fff",
                            padding: 32,
                            borderRadius: 8,
                            minWidth: 320,
                            textAlign: "center",
                        }}
                    >
                        <h3>Đăng nhập</h3>
                        <input
                            ref={inputRef}
                            type="text"
                            placeholder="Nhập tên người dùng"
                            style={{ width: "90%", padding: 8, marginBottom: 16 }}
                        />
                        <br />
                        <button
                            onClick={() => setOpen(false)}
                            style={{
                                background: "#f44336",
                                color: "#fff",
                                border: "none",
                                padding: "6px 16px",
                                borderRadius: 4,
                            }}
                        >
                            Đóng
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};