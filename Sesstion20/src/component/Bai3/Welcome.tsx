import React, { useEffect } from "react";

export const Welcome = () => {
    useEffect(() => {
        console.log("Component đã được render lần đầu!");
    }, []);

    return (
        <div style={{ textAlign: "center", marginTop: 40 }}>
            <h2 style={{ fontWeight: "bold", fontSize: 24 }}>
                Chào mừng bạn đến với ứng dụng của chúng tôi!
            </h2>
        </div>
    );
};