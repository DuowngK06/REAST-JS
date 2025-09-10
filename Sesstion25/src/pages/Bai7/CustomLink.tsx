import React from "react";
import { Link, useLocation, Navigate } from "react-router-dom";

export default function CustomLink() {
    const location = useLocation();

    // Kiểm tra nếu đúng đường dẫn thì cho phép hiển thị link HomePage
    if (location.pathname === "/home-page") {
        return <Link to="/home-page">Go to HomePage</Link>;
    }

    // Nếu sai đường dẫn thì chuyển hướng NotFound
    return <Navigate to="/not-found" replace />;
}
