import React from "react";

export const CountText = () => {
    const [count, setcount] = React.useState<number>(0);

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setcount(event.target.value.length);
    };

    return (
        <div>
            <textarea name="" id="" onChange={handleChange}></textarea>
            <p>So ky tu: {count}</p>
        </div>
    );
};