import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useProductStore from "../store/productStore";

function SearchModal({ query, onClose }) {
  const { products } = useProductStore();
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query.trim() !== "") {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [query, products]);

  return (
    <div className="fixed inset-0 z-40 pt-20 flex items-start justify-center p-4">
      <div
        className="absolute inset-0 bg-gray-800 opacity-50"
        onClick={onClose}
      ></div>

      <div className="relative bg-white rounded shadow-lg w-full max-w-md p-4 z-10">
        <h2 className="text-xl font-bold mb-4">Search Results</h2>
        {results.length > 0 ? (
          <ul className="space-y-2">
            {results.map((product) => (
              <li key={product.id}>
                <Link
                  to={`/product/${product.id}`}
                  className="flex items-center p-2 hover:bg-gray-100 rounded"
                  onClick={onClose}
                >
                  {product.image?.url && (
                    <img
                      src={product.image.url}
                      alt={product.image.alt || product.title}
                      className="w-10 h-10 object-cover rounded mr-2"
                    />
                  )}
                  <span>{product.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
}

export default SearchModal;
