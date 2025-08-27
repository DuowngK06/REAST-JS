import { useState } from "react";

export default function checkbox() {
    const [hobbies, setHobbies] = useState<string[]>([]);

    const list = ["Đi chơi", "Code", "Bơi lội", "Nhảy dây"];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (e.target.checked) {

            setHobbies([...hobbies, value]);
        } else {

            setHobbies(hobbies.filter((item) => item !== value));
        }
    };

    return (
        <div>
            <p>Sở thích: {JSON.stringify(hobbies)}</p>
            {list.map((item) => (
                <div key={item}>
                    <label>
                        <input
                            type="checkbox"
                            value={item}
                            checked={hobbies.includes(item)}
                            onChange={handleChange}
                        />
                        {item}
                    </label>
                </div>
            ))}
        </div>
    );
}