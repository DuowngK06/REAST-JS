import { useEffect, useState } from "react";

interface Product {
    id: number;
    product_name: string;
    image: string;
    price: number;
    quantity: number;
    created_at: string;
}
async function getAllProduct(): Promise<Product[]> {
    try {
        const response = await fetch("http://localhost:8000/products");
        if (!response.ok) {
            throw new Error("Lỗi khi gọi API");
        }
        const data: Product[] = await response.json();
        console.log("Danh sách sản phẩm:", data);
        return data;
    } catch (error) {
        console.error("Lỗi:", error);
        return [];
    }
}

export default function bt2() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        getAllProduct().then((data) => setProducts(data));
    }, []);

    return (
        <div style={{ padding: "20px" }}>
            <h2>Danh sách sản phẩm</h2>
            <ul>
                {products.map((p) => (
                    <li key={p.id}>
                        <strong>{p.product_name}</strong> -{" "}
                        {p.price.toLocaleString("vi-VN")} VND
                    </li>
                ))}
            </ul>
        </div>
    );
}