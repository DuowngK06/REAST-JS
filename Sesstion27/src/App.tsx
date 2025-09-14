import React from 'react'
import About from './pages/Bai1/About'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Bai1/Home'
import Contact from './pages/Bai1/Contact'
export default function App() {
  return (
    <div>
      <RouterProvider router={createBrowserRouter([
        {
          path: '/',
          element:<Home/>
        },{
          path:'/about',
          element:<About/>
        },
        {
          path:'/contact',
          element:<Contact/>
        },
      ])} />
    </div>
  )
}
