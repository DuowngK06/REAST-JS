import React, { Component } from "react";

type Product = {
    id: number;
    name: string;
    price: number;
    quantity: number;
};

export default class Children_Product extends Component<Product> {
    render() {
        return (
            <>
                <p>Dữ liệu trong component con</p>
                <p>ID: {this.props.id}</p>
                <p>Product Name: {this.props.name}</p>
                <p>Price: {this.props.price} đ</p>
                <p>Quantity: {this.props.quantity}</p>
            </>
        );
    }
}