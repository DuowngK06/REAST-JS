import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contast'
import Admin from '../layouts/Admin'
import UserManager from '../pages/UserManager'
import ProductManager from '../pages/ProductManager'
import ProductDetail from '../component/Bai1/ProductDetail'
import Studen from '../component/Bai2/Studen'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'
import OrderManager from '../pages/OrderManager'
import "../component/Bai3/Student"


export const routers = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>
    },
    {
        path: "/about",
        element: <About></About>
    },
    {
        path: "/contact",
        element: <Contact></Contact>
    },
    {
        path: "/student/:name",
        element: <Studen></Studen>
    },
        {
        path: "/admin",
        element: <Admin></Admin>,
        children: [
            {
                path: "user",
                element: <UserManager></UserManager>
            },
            {
                path: "product",
                element: <ProductManager></ProductManager>
            },
            {
                path: "product/:id",
                element: <ProductDetail></ProductDetail>
            },
            {
                path: "order",
                element: <OrderManager></OrderManager>
            }

        ]
    },
    {
        path: "/login",
        element: <Login></Login>
    },
    {
        path: "*",
        element: <NotFound></NotFound>
    }
])

