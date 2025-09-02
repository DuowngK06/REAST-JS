import React, { useState } from "react";

export const Exersice04 = () => {
    const [fullName, setFullName] = useState("");
    const [errorFullName, setErrorFullName] = useState<boolean>(false);
    const [email, setEmail] = useState("");
    const [errorEmail, setErrorEmail] = useState<boolean>(false);

    const regex = /^[A-Za-z0-9._%+-]+@domain\.com$/i;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!errorFullName && !errorEmail) {
            alert("Gui thanh cong");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === "fullName") {
            setFullName(value);
            setErrorFullName(!value);
        } else if (name === "email") {
            setEmail(value);
            setErrorEmail(!regex.test(value));
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Dang ky thong tin</h3>
            <label htmlFor="">Ho ten</label>
            <br />
            <input
                type="text"
                name="fullName"
                id="fullName"
                onChange={handleChange}
            />
            <br />
            {errorFullName && (
                <span style={{ color: "red" }}>Truong nay la bat buoc</span>
            )}
            <br />
            <label htmlFor="">Email</label>
            <br />
            <input type="text" name="email" id="email" onChange={handleChange} />
            <br />
            {errorEmail && <span style={{ color: "red" }}>Email khong hop le.</span>}
            <br />
            <button>Gui</button>
        </form>
    );
};