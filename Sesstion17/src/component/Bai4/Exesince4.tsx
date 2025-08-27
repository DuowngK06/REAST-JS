import React from "react";

export const Exersice04 = () => {
    const [toggele, setToggle] = React.useState<boolean>(true);

    const handleToggle = () => {
        setToggle(!toggele);
    };

    return (
        <>
            <button onClick={handleToggle}>{toggele ? "Hien" : "An"}</button>
            <p>{toggele ? "" : "Tieu de van ban"}</p>
        </>
    );
};