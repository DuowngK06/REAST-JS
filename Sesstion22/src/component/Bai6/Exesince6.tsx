import React from 'react'
import Spinner from "react-bootstrap/Spinner";
export default function Exesince6() {
    return (
        <div>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: "center", marginTop: "50px" }}>
                <Spinner animation="border" style={{ color: "blue" }} />
                <Spinner animation="border" style={{ color: "gray" }} />
                <Spinner animation="border" style={{ color: "green" }} />
            </div>
            );
}
        </div>
    )
}
