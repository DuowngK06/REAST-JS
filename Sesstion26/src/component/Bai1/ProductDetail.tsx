import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetail() {
    const id = useParams();
    console.log(id);
    return (
        <div>
            <h1>Trang chi tiết sản phẩm </h1>
<p>id:{id.id} </p>
        </div>
    )
}
