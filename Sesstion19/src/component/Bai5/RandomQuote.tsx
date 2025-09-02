import React, { useState } from "react";

interface RandomQuoteProps {
    qute: string;
}

const quoteLists: RandomQuoteProps[] = [
    { qute: "Có những con đường chỉ mở ra cho những ai đủ kiên nhẫn đi đến cuối." },
    {
        qute: "Thất bại là mẹ thành công.",
    },
    { qute: "Không có gì là không thể." },
    { qute: "Không sợ không làm đươc,chỉ sợ không dám làm." },
    { qute: "Muốn đi nhanh hãy đi một mình, muốn đi xa hãy đi cùng nhau." },
];

export const RandomQuote = () => {
    const [quote, setQuote] = useState("Có những con đường chỉ mở ra cho những ai đủ kiên nhẫn đi đến cuốii.");

    const handleClick = () => {
        const randomIndex = Math.floor(Math.random() * quoteLists.length);
        setQuote(quoteLists[randomIndex].qute);
    };

    return (
        <>
            <h1>Câu nói truyền cảm hứng hôm nay:</h1>
            <div>{quote}</div>
            <button onClick={handleClick}>Lấy câu nói mới</button>
        </>
    );
};