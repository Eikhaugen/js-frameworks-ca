import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Link 
      to={`/product/${product.id}`} 
      className="border rounded shadow p-4 flex flex-col hover:shadow-lg transition-shadow"
    >
      <img
        src={product.image.url}
        alt={product.image.alt || product.title}
        className="w-full h-64 object-cover rounded"
      />
      <h2 className="text-xl font-bold mt-2">{product.title}</h2>
      <p className="text-gray-700 mt-1 flex-1">{product.description}</p>
      <div className="mt-2 flex items-center justify-between">
        <span className="text-lg font-semibold">
          $
          {product.discountedPrice
            ? product.discountedPrice
            : product.price}
        </span>
        <span className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          View Product
        </span>
      </div>
    </Link>
  );
}

export default ProductCard;
