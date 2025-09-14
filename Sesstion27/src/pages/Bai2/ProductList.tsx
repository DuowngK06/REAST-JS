
import { Link } from "react-router-dom";
 import { products } from "./Case";

export default function ProductList() {
  return (
    <div>
      <h2>Danh sách sản phẩm</h2>
      <div>
        {products.map((p) => (
          <div key={p.id}>
            <h3>{p.name}</h3>
            <p>Giá: {p.price.toLocaleString()} VNĐ</p>
            <p>{p.description}</p>
            <Link to={`/products/${p.id}`}>Xem chi tiết</Link>
          </div>
        ))}
      </div>
    </div>
  );
}