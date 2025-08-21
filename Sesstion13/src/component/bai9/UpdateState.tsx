
import React, { useState } from 'react';

const UpdateState = () => {
    const [companyName, setCompanyName] = useState('Rikkei Academy');

    const handleChange = () => {
        setCompanyName('Rikkei Soft');
    };

    return (
        <div>
            <h2>Tên công ty: {companyName}</h2>
            <button onClick={handleChange}>Change</button>
        </div>
    );
};

export default UpdateState;