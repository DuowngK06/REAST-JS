import React, { Component } from "react";
import Children_Product from "./Children_Product";

type Product = {
    id: number;
    name: string;
    price: number;
    quantity: number;
};

export default class Praent_Product extends Component<object, Product> {
    constructor(props: object) {
        super(props);
        this.state = {
            id: 1,
            name: "Bưởi Ba roi",
            price: 12000,
            quantity: 6,
        };
    }

    render() {
        return (
            <Children_Product
                id={this.state.id}
                name={this.state.name}
                price={this.state.price}
                quantity={this.state.quantity}
            />
        );
    }
}