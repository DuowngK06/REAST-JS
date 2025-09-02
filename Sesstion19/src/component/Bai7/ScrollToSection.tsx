import React, { useRef } from "react";

export const ScrollToSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const handleScroll = () => {
        sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <>
            <div style={{ height: "200vh", padding: "20px" }}>
                <h1>Cuộn tới nội dung</h1>
                <button onClick={handleScroll}>Đi tới phần nội dung</button>
            </div>
            <div ref={sectionRef}>
                <p>Đây là nội dung giả lập tạo khoảng cách cho trang ...</p>
                <p>Bạn có thẻ thme nhiều đoạn như thế nay để tăng chiều dài.</p>
                <p>Cuộn trang sx mượt mà hơn khi có nhiều nội dung.</p>
            </div>
        </>
    );
};