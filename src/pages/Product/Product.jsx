import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useCartStore from "../../store/cartStore";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(`https://v2.api.noroff.dev/online-shop/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        const data = await response.json();
        setProduct(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  if (loading) return <p className="p-4">Loading...</p>;
  if (error) return <p className="p-4 text-red-600">Error: {error}</p>;
  if (!product) return <p className="p-4">No product found.</p>;

  const discountPercentage =
    product.price && product.discountedPrice && product.price > product.discountedPrice
      ? Math.round(((product.price - product.discountedPrice) / product.price) * 100)
      : 0;

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-4">
        {product.image?.url ? (
          <img
            src={product.image.url}
            alt={product.image.alt || product.title}
            className="w-full md:w-1/2 object-cover rounded"
          />
        ) : (
          <div className="w-full md:w-1/2 h-64 bg-gray-200 flex items-center justify-center rounded">
            <span className="text-gray-500">No Image Available</span>
          </div>
        )}
        <div className="flex-1">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="mt-4 text-gray-700">{product.description}</p>
          <div className="mt-4">
            {discountPercentage > 0 ? (
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-semibold">
                  ${product.discountedPrice.toFixed(2)}
                </span>
                <span className="text-gray-500 line-through">
                  ${product.price}
                </span>
                <span className="text-sm text-green-600">
                  {discountPercentage}% off
                </span>
              </div>
            ) : (
              <span className="text-2xl font-semibold">
                ${product.price}
              </span>
            )}
          </div>
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600"
          >
            Add to Cart
          </button>
          {product.reviews && product.reviews.length > 0 && (
            <div className="mt-6">
              <h2 className="text-xl font-semibold">Reviews:</h2>
              <ul className="list-disc pl-5">
                {product.reviews.map((review) => (
                  <li key={review.id} className="mt-2">
                    <p className="font-medium">{review.username}:</p>
                    <p>{review.description}</p>
                    <p className="text-sm text-gray-500">
                      Rating: {review.rating} / 5
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;
