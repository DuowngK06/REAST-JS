import React from 'react'
const InputSizes = () => {
    const baseStyle = {
        border: "1px solid #ccc",
        borderRadius: "6px",
        outline: "none",
        transition: "border 0.3s ease",
        marginBottom: "12px",
    };
    export default function Exesince2() {


        return (
            <div style={{ width: "300px", display: "flex", flexDirection: "column" }}>
                <input
                    type="text"
                    placeholder="Input cỡ lớn"
                    style={{ ...baseStyle, fontSize: "18px", padding: "14px 16px" }}
                />
                <input
                    type="text"
                    placeholder="Input cỡ trung bình"
                    style={{ ...baseStyle, fontSize: "16px", padding: "10px 14px" }}
                />
                <input
                    type="text"
                    placeholder="Input cỡ bé"
                    style={{ ...baseStyle, fontSize: "14px", padding: "6px 10px" }}
                />
            </div>
        );
    };