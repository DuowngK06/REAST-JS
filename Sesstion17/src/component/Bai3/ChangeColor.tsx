import React from "react";

export const ChangeColor = () => {
    const [color, setColor] = React.useState<string>("black");

    const handleChangeColor = () => {
        setColor(color === "black" ? "red" : "black");
    };

    return (
        <div>
            <p style={{ color: color }}>Tieu de van ban</p>
            <button onClick={handleChangeColor}>Thay doi mau</button>
        </div>
    );
};