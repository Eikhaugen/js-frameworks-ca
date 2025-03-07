import { useSearchParams, Link } from "react-router-dom";
import useProductStore from "../../store/productStore";

function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const { products } = useProductStore();

  const results = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Search Results for: {query}</h1>
      {results.length > 0 ? (
        <ul className="space-y-4">
          {results.map((product) => {
            const hasDiscount =
              product.discountedPrice &&
              product.discountedPrice < product.price;
            const discountPercentage = hasDiscount
              ? Math.round(
                  ((product.price - product.discountedPrice) / product.price) *
                    100
                )
              : 0;
            return (
              <li
                key={product.id}
                className="border p-4 rounded hover:bg-gray-100"
              >
                <Link
                  to={`/product/${product.id}`}
                  className="flex items-center"
                >
                  {product.image?.url && (
                    <img
                      src={product.image.url}
                      alt={product.image.alt || product.title}
                      className="w-16 h-16 object-cover rounded mr-4"
                    />
                  )}
                  <div>
                    <span className="text-lg font-semibold">
                      {product.title}
                    </span>
                    <div>
                      {hasDiscount ? (
                        <div className="flex items-center space-x-2">
                          <span className="font-bold text-lg">
                            ${product.discountedPrice.toFixed(2)}
                          </span>
                          <span className="text-gray-500 line-through">
                            ${product.price.toFixed(2)}
                          </span>
                          <span className="text-sm text-green-600">
                            {discountPercentage}% off
                          </span>
                        </div>
                      ) : (
                        <span className="font-bold text-lg">
                          ${product.price.toFixed(2)}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
}

export default Search;
