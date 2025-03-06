// src/components/ProductCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import useCartStore from "../store/cartStore";

function ProductCard({ product }) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="border rounded shadow p-4 flex flex-col">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image.url}
          alt={product.image.alt || product.title}
          className="w-full h-64 object-cover rounded"
        />
        <h2 className="text-xl font-bold mt-2">{product.title}</h2>
      </Link>
      <p className="text-gray-700 mt-1 flex-1">{product.description}</p>
      <div className="mt-2 flex items-center justify-between">
        <span className="text-lg font-semibold">
          $
          {product.discountedPrice
            ? product.discountedPrice.toFixed(2)
            : product.price.toFixed(2)}
        </span>
        <button
          onClick={() => addToCart(product)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
