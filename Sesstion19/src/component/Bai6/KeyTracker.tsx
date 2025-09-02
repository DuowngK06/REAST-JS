import React, { use, useEffect, useState } from "react";

export const KeyTracker = () => {
    const [key, setkey] = useState("");

    useEffect(() => {
        const handleKeydown = (event: KeyboardEvent) => {
            setkey(event.key);
            console.log("Key push:", event.key);
        };

        window.addEventListener("keydown", handleKeydown);

        return () => {
            window.removeEventListener("keydown", handleKeydown);
        };
    }, []);

    return (
        <>
            <h3>Phím bạn vừa nhấn:</h3>
            <h1>{key}</h1>
        </>
    );
};