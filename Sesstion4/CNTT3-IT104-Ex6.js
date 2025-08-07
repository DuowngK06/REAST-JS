// Định nghĩa kiểu dữ liệu Product
type Product = {
    id: string;
    name: string;
    price: number;
    category: {
        id: string;
        name: string;
    };
    discount?: number; // optional
};

// Mảng gồm 3 sản phẩm mẫu
const listProduct: Product[] = [
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
function getFinalPrice(product: Product): number {
    if (product.discount) {
        return product.price - (product.price * product.discount) / 100;
    }
    return product.price;
}


function printProductInfo(product: Product): void {
    const finalPrice = getFinalPrice(product);
    console.log(
        `Sản phẩm: ${product.name} - Giá gốc: ${product.price}đ` +
        (product.discount ? ` - Giảm giá: ${product.discount}%` : "") +
        ` - Giá sau giảm: ${finalPrice}đ - Danh mục: ${product.category.name}`
    );
}


listProduct.forEach(printProductInfo);
