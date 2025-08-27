import React from "react";

export const Form = () => {
    const [content, setContent] = React.useState<string>("");
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setContent(event.target.value);
    };
    return (
        <>
            <form action="">
                <input
                    type="text"
                    name=""
                    id=""
                    value={content}
                    onChange={handleChange}
                />
                <p>{content}</p>
            </form>
        </>
    );
};