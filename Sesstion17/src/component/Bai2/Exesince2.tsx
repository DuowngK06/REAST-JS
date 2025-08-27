import React from "react";

type Product = {
    id: number;
    name: string;
    price: number;
    quantity: number;
};

export const Exersice02 = () => {
    const [product] = React.useState<Product>({
        id: 1,
        name: "Coca cola",
        price: 1000,
        quantity: 10,
    });

    return (
        <>
            <h2>Thong tin san pham</h2>
            <p>Id: {product.id}</p>
            <p>Name: {product.name}</p>
            <p>Price: {product.price}</p>
            <p>Quantity: {product.quantity}</p>
        </>
    );
};