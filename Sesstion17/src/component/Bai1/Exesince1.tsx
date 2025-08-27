import React from "react";

export const Exerice01 = () => {
    const [name] = React.useState<string>("Nguyen Van A");

    return <div>Ho va ten: {name}</div>;
};