import React, { useState, useCallback } from "react";

const ColorPicker: React.FC = () => {
    const [color, setColor] = useState<string>("");

    const handleChangeColor = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setColor(e.target.value);
            console.log("Color selected:", e.target.value);
        },
        []
    );

    return (
        <div className="color-picker-container">
            <h2>Color Picker</h2>


            <input type="color" value={color} onChange={handleChangeColor} />


            {!color && <p>Chưa chọn màu nào</p>}


            {color && (
                <div className="color-display" style={{ backgroundColor: color }}>
                    {color}
                </div>
            )}
        </div>
    );
};

export default ColorPicker;