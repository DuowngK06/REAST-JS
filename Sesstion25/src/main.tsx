import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import OrderManeger from './pages/OrderManeger.tsx'
import Home from './pages/Home.tsx'
const routes = createBrowserRouter([
  {
    path: "/OrderManeger", element: <OrderManeger />
  }
   {
    path: "/Home", element: <Home />
  }

])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <RouterProvider router={routes} />
  </StrictMode>,
)
