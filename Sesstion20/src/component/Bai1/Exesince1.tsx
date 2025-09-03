import React, { useState } from 'react'

export default function Exesince1() {
    const [value, setValue] = useState('');

    return (
        <div>
            <h1>Kiểm tra độ dài chuỗi nhập vào</h1>
            <input
                type="text"
                placeholder="Nhập chuỗi..."
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <p>Độ dài chuỗi: {value.length}</p>
        </div>
    )
}