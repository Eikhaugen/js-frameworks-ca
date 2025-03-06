import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./layout/index.jsx";
import Home from "./pages/Home/Home";
import Product from './pages/Product/Product.jsx';
import './index.css'

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "product/:id",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <h1>Cart</h1>,
      },
      {
        path: "/success",
        element: <h1>Checkout Success</h1>,
      },
      {
        path: "/contact",
        element: <h1>Contact</h1>,
      },
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);