import { useState } from "react";
import { useSearchParams } from "react-router-dom";

interface IProduct {
    id: number;
    name: string;
    price: number;
    description: string;
}

export default function ProductList() {

    const products: IProduct[] = [
        {
            id: 1,
            name: "iPhone 15 Pro",
            price: 29990000,
            description: "Điện thoại cao cấp với chip A17 Pro và camera tiên tiến.",
        },
        {
            id: 2,
            name: "Samsung Galaxy S23 Ultra",
            price: 25990000,
            description: "Smartphone flagship của Samsung với camera 200MP.",
        },
        {
            id: 3,
            name: "MacBook Air M2",
            price: 28990000,
            description: "Laptop mỏng nhẹ với chip Apple M2 hiệu năng mạnh mẽ.",
        },
        {
            id: 4,
            name: "Dell XPS 13",
            price: 25990000,
            description: "Laptop siêu mỏng với màn hình InfinityEdge sắc nét.",
        },
        {
            id: 5,
            name: "iPad Pro 12.9\"",
            price: 31990000,
            description: "Máy tính bảng cao cấp với màn hình Liquid Retina XDR.",
        },
    ];

    const [searchParams, setSearchParams] = useSearchParams();
    const searchQuery = searchParams.get("search") || "";
    const [inputValue, setInputValue] = useState(searchQuery);

    const handleSearch = () => {
        if (inputValue) {
            setSearchParams({ search: inputValue });
        } else {
            setSearchParams({});
        }
    };

    const filteredProducts = products.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <h2>Danh sách sản phẩm</h2>

            <input
                type="text"
                placeholder="Nhập từ khóa tìm kiếm..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>

            <ul>
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <li key={product.id} >
                            <h4>{product.name}</h4>
                            <p>Giá: {product.price.toLocaleString("vi-VN")} VND</p>
                            <p>{product.description}</p>
                        </li>
                    ))
                ) : (
                    <p>Không tìm thấy sản phẩm nào.</p>
                )}
            </ul>
        </div>
    );
}