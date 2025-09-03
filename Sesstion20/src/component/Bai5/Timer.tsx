import React, { useState, useEffect } from "react";

function Timer() {
    const [count, setCount] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {
            setCount(prev => prev + 1);
        }, 1000);


        return () => {
            clearInterval(interval);
            console.log("Timer đã được dừng");
        };
    }, []);

    return (
        <div>
            <h2>Timer: {count} giây</h2>
        </div>
    );
}

export default Timer;
