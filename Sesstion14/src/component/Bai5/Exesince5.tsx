import React, { Component } from "react";

interface Product {
    id: string;
    name: string;
    price: number;
    quantity: number;
}

export default class Exesince05 extends Component<object, Product> {
    constructor(props: object) {
        super(props);
        this.state = {
            id: "",
            name: "",
            price: 0,
            quantity: 0,
        };
    }

    render() {
        const sumitFrom = (e: React.ChangeEvent<HTMLFormElement>) => {
            e.preventDefault();
            console.log(this.state);
        };

        const hanleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = e.target;

            this.setState({ ...this.state, [name]: value });
        };

        return (
            <>
                <form action="" onSubmit={sumitFrom}>
                    <h4>Thêm sản phảm mới</h4>
                    <label htmlFor="">Mã sản phẩm</label>
                    <br />
                    <input type="text" name="id" id="id" onChange={hanleChange} />
                    <br />
                    <label htmlFor="">Tên sản phẩm</label>
                    <input type="text" name="name" id="name" onChange={hanleChange} />
                    <br />
                    <label htmlFor="">Giá</label>
                    <input type="text" name="price" id="price" onChange={hanleChange} />
                    <br />
                    <label htmlFor="">Số lượng</label>
                    <input
                        type="number"
                        name="quantity"
                        id="quantity"
                        onChange={hanleChange}
                    />
                    <br />
                    <input type="submit" />
                </form>
            </>
        );
    }
}