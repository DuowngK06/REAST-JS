import React, { Component } from "react";
import "./PhoneStore.css";

type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
};

type CartItem = Product & { quantity: number };

type State = {
    products: Product[];
    cart: CartItem[];
    showCart: boolean;
};

class PhoneStore extends Component<{}, State> {
    state: State = {
        products: [
            { id: 1, name: "iPhone 15 Pro", price: 28000000, image: "" },
            { id: 2, name: "Samsung Galaxy S24", price: 23000000, image: "" },
            { id: 3, name: "Xiaomi 13 Ultra", price: 20000000, image: "" },
            { id: 4, name: "Oppo Find X6", price: 19000000, image: "" },
            { id: 5, name: "Google Pixel 8", price: 21000000, image: "" },
            { id: 6, name: "Sony Xperia 1V", price: 22000000, image: "" },
        ],
        cart: [],
        showCart: false,
    };

    toggleCart = () => {
        this.setState({ showCart: !this.state.showCart });
    };

    addToCart = (product: Product) => {
        const existing = this.state.cart.find(item => item.id === product.id);
        if (existing) {
            this.setState({
                cart: this.state.cart.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                ),
            });
        } else {
            this.setState({ cart: [...this.state.cart, { ...product, quantity: 1 }] });
        }
    };

    increaseQty = (id: number) => {
        this.setState({
            cart: this.state.cart.map(item =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            ),
        });
    };

    decreaseQty = (id: number) => {
        this.setState({
            cart: this.state.cart
                .map(item => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item))
                .filter(item => item.quantity > 0),
        });
    };

    removeFromCart = (id: number) => {
        this.setState({
            cart: this.state.cart.filter(item => item.id !== id),
        });
    };

    getTotal = () => {
        return this.state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    };

    render() {
        return (
            <div className="store-container">
                <header className="store-header">
                    <h1> Cửa hàng điện thoại</h1>
                    <button className="cart-btn" onClick={this.toggleCart}>
                        Giỏ hàng ({this.state.cart.length})
                    </button>
                </header>

                <div className="product-grid">
                    {this.state.products.map(product => (
                        <div className="product-card" key={product.id}>
                            <img src={product.image} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>{product.price.toLocaleString()} VNĐ</p>
                            <button onClick={() => this.addToCart(product)}>Thêm vào giỏ</button>
                        </div>
                    ))}
                </div>

                {this.state.showCart && (
                    <div className="cart">
                        <h2> Giỏ hàng</h2>
                        {this.state.cart.length === 0 ? (
                            <p>Chưa có sản phẩm trong giỏ</p>
                        ) : (
                            <ul>
                                {this.state.cart.map(item => (
                                    <li key={item.id}>
                                        {item.name} - {item.price.toLocaleString()} VNĐ  {item.quantity}
                                        <div className="cart-actions">
                                            <button onClick={() => this.increaseQty(item.id)}>+</button>
                                            <button onClick={() => this.removeFromCart(item.id)}>Xóa</button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                        <h3>Tổng cộng: {this.getTotal().toLocaleString()} VNĐ</h3>
                    </div>
                )}
            </div>
        );
    }
}

export default PhoneStore;