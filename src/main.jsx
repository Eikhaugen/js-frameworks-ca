import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./layout/index.jsx";
import Home from "./pages/Home/Home";
import Product from './pages/Product/Product.jsx';
import Cart from './pages/Cart/Cart.jsx';
import CheckoutSuccess from './pages/CheckoutSuccess/CheckoutSuccess.jsx';
import Contact from './pages/Contact/Contact.jsx';
import Search from './pages/Search/Search.jsx';
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
        element: <Cart />,
      },
      {
        path: "/success",
        element: <CheckoutSuccess />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/search",
        element: <Search />,
      },
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);