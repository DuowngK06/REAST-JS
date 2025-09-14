
import { useParams } from "react-router-dom";
import { products } from "./Case";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <h2>Sản phẩm không tồn tại.</h2>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p><b>Giá:</b> {product.price.toLocaleString()} VNĐ</p>
      <p><b>Mô tả chi tiết:</b> {product.detail}</p>
    </div>
  );
}