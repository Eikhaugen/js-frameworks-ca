import { useNavigate } from "react-router-dom";
import useCartStore from "../../store/cartStore";

function Cart() {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const navigate = useNavigate();

  const total = cart.reduce((acc, item) => {
    const price = item.discountedPrice ? item.discountedPrice : item.price;
    return acc + price * (item.quantity || 1);
  }, 0);

  const handleCheckout = () => {
    navigate("/success");
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    }
  };

  const handleIncrease = (item) => {
    updateQuantity(item.id, item.quantity + 1);
  };

  if (cart.length === 0) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
        <p>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <ul className="space-y-4">
        {cart.map((item) => (
          <li
            key={item.id}
            className="flex flex-col md:flex-row items-center justify-between border p-4 rounded"
          >
            <div className="flex items-center space-x-4">
              <img
                src={item.image.url}
                alt={item.image.alt || item.title}
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <h2 className="font-bold">{item.title}</h2>
                <div className="flex items-center mt-1 space-x-2">
                  <button
                    onClick={() => handleDecrease(item)}
                    className="bg-gray-200 px-2 py-1 rounded"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => handleIncrease(item)}
                    className="bg-gray-200 px-2 py-1 rounded"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4 mt-2 md:mt-0">
              <span className="font-semibold">
                $
                {((item.discountedPrice ? item.discountedPrice : item.price) *
                  (item.quantity || 1)
                ).toFixed(2)}
              </span>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-xl font-bold">Total: ${total.toFixed(2)}</span>
        <button
          onClick={handleCheckout}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
