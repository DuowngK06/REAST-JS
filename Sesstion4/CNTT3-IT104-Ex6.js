"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Mảng gồm 3 sản phẩm mẫu
const listProduct = [
    {
        id: "P001",
        name: "Áo thun nam",
        price: 200000,
        category: {
            id: "C001",
            name: "Thời trang"
        },
        discount: 10
    },
    {
        id: "P002",
        name: "Chuột gaming",
        price: 500000,
        category: {
            id: "C002",
            name: "Thiết bị điện tử"
        }
    },
    {
        id: "P003",
        name: "Sách lập trình",
        price: 150000,
        category: {
            id: "C003",
            name: "Sách"
        },
        discount: 20
    }
];
// Hàm tính giá sau giảm (nếu có discount)
function getFinalPrice(product) {
    if (product.discount) {
        return product.price - (product.price * product.discount) / 100;
    }
    return product.price;
}
function printProductInfo(product) {
    const finalPrice = getFinalPrice(product);
    console.log(`Sản phẩm: ${product.name} - Giá gốc: ${product.price}đ` +
        (product.discount ? ` - Giảm giá: ${product.discount}%` : "") +
        ` - Giá sau giảm: ${finalPrice}đ - Danh mục: ${product.category.name}`);
}
listProduct.forEach(printProductInfo);
//# sourceMappingURL=CNTT3-IT104-Ex6.js.map