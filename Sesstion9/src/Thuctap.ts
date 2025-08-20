type Categorye = "Điện tử" | "Quần áo";

interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    category: Category;
    // Thông tin chi tiế
    warranty?: string;
    size?: string;
    color?: string;
}

interface Customer {
    id: number;
    name: string;
    email: string;
    address: string;
}

interface Order {
    id: number;
    customerId: number;
    items: { productId: number; quantity: number }[];
    total: number;
    status: "Active" | "Cancelled";
}

class Stone {
    private customers: Customer[] = [];
    private products: Product[] = [];
    private orders: Order[] = [];

    private customerIdCounter = 1;
    private productIdCounter = 1;
    private orderIdCounter = 1;

    // ---- 1. Thêm khách hàng mới ----
    addCustomer(name: string, email: string, address: string): void {
        const customer: Customer = {
            id: this.customerIdCounter++,
            name,
            email,
            address,
        };
        this.customers.push(customer);
        console.log("Đã thêm khách hàng:", customer);
    }

    // ---- 2. Thêm sản phẩm mới ----
    addProduct(
        name: string,
        price: number,
        stock: number,
        category: Category,
        details?: { warranty?: string; size?: string; color?: string }
    ): void {
        const product: Product = {
            id: this.productIdCounter++,
            name,
            price,
            stock,
            category,
            ...details,
        };
        this.products.push(product);
        console.log("Đã thêm sản phẩm:", product);
    }

    showMenu() {
        console.log("===== Quản lý cửa hàng =====");
        console.log("1. Thêm khách hàng mới");
        console.log("2. Thêm sản phẩm mới");
        console.log("3. Tạo đơn hàng mới ");
        console.log("4. Hủy đơn hàng");
        console.log("5. Hiển thị danh sách sản phẩm còn hàng trong kho");
        console.log("6. Hiển thị danh sách đơn hàng của một khách hàng");
        console.log("7. Tính và hiển thị tổng doanh thu của cửa hàng");
        console.log("8. Thống kê sản phẩm theo danh mục ");
        console.log("9. Cập nhật tồn kho cho một sản phẩm");
        console.log("10. Tìm kiếm và hiển thị thông tin bằng ID");
        console.log("11. Xem thông tin chi tiết ");
        console.log("0. Thoát");
    }
}

const Stone = new Store();
store.showMenu(); 
