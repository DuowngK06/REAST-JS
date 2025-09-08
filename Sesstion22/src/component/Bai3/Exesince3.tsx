import React from "react";

const ProductCard = ({ image, title, description, price }) => {
    const cardStyle = {
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "12px",
        width: "250px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
    };

    const imgStyle = {
        width: "100%",
        height: "160px",
        objectFit: "cover",
        borderRadius: "6px",
    };

    const buttonStyle = {
        backgroundColor: "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: "6px",
        padding: "8px 16px",
        cursor: "pointer",
        marginTop: "8px",
    };

    const priceStyle = {
        fontWeight: "bold",
        marginTop: "8px",
    };

    return (
        <div style={cardStyle}>
            <img src={image} alt={title} style={imgStyle} />
            <h3>{title}</h3>
            <p>{description}</p>
            <button style={buttonStyle}>Xem chi tiết</button>
            <div style={priceStyle}>{price} đ</div>
        </div>
    );
};

const ProductList = () => {
    const products = [
        {
            image: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXeoVF75d5n9Utu4lZJfcB5KN0ROD4Pr818vFVZFdEuuplVQUT8cWTaauUkvVFWccEE3EJP-I78pbDRxMw9BWktRJ11d3KiDfn1M56WtTFbnSpBv9qBz594jfC4zYkwNCo7WbXwNanVHi0RVklPHCrE?key=ECrI32_gUbjnutfebtA7-Q",
            title: "MacBook Air 2018",
            description: "The reason I am selling the machine is because it is too much power for what I need",
            price: "30.000.000",
        },
        {
            image: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXeoVF75d5n9Utu4lZJfcB5KN0ROD4Pr818vFVZFdEuuplVQUT8cWTaauUkvVFWccEE3EJP-I78pbDRxMw9BWktRJ11d3KiDfn1M56WtTFbnSpBv9qBz594jfC4zYkwNCo7WbXwNanVHi0RVklPHCrE?key=ECrI32_gUbjnutfebtA7-Q",
            title: "MacBook Pro 2019",
            description: "The reason I am selling the machine is because it is too much power for what I need",
            price: "30.000.000",
        },
    ];

    return (
        <div style={{ display: "flex", gap: "16px" }}>
            {products.map((p, i) => (
                <ProductCard key={i} {...p} />
            ))}
        </div>
    );
};

export default ProductList;
