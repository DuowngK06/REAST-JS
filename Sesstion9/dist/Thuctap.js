class Store {
    constructor() {
        this.customers = [];
        this.products = [];
        this.orders = [];
        this.customerIdCounter = 1;
        this.productIdCounter = 1;
        this.orderIdCounter = 1;
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
    // ---- 1. Them khach hang moi ----
    addCustomer(name, email, address) {
        const customer = {
            id: this.customerIdCounter++,
            name,
            email,
            address,
        };
        this.customers.push(customer);
        console.log("Đã thêm khách hàng:", customer);
    }
}
