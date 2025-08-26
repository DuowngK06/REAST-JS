import { useState } from "react";

function ClickCounter() {
    // khai báo state count với giá trị khởi tạo = 0
    const [count, setCount] = useState(0);

    // hàm xử lý khi bấm nút
    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h2>Số lần click: {count}</h2>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}

export default ClickCounter;
