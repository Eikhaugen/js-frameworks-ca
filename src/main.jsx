import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./layout/index.jsx";
import './index.css'

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        path: "/",
        element: <h1>Home</h1>,
      },
      {
        path: "product/:id",
        element: <h1>Product page</h1>,
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