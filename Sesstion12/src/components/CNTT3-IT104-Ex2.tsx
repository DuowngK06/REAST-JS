import React from "react";

const Calculation: React.FC = () => {
    const a = 10;
    const b = 10;

    // 4 hàm tính toán
    const add = (x: number, y: number): number => x + y;
    const subtract = (x: number, y: number): number => x - y;
    const multiply = (x: number, y: number): number => x * y;
    const divide = (x: number, y: number): number => x / y;

    return (
        <div>
            <h3>Danh sách kết quả</h3>
            <ul>
                <li>
                    {a} + {b} = {add(a, b)}
                </li>
                <li>
                    {a} - {b} = {subtract(a, b)}
                </li>
                <li>
                    {a} * {b} = {multiply(a, b)}
                </li>
                <li>
                    {a} / {b} = {divide(a, b)}
                </li>
            </ul>
        </div>
    );
};

function CNTT3IT104Ex2() {
    return (
        <div>
            <Calculation />
        </div>
    );
}

export default CNTT3IT104Ex2;