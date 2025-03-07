import { useEffect } from "react";
import { Link } from "react-router-dom";
import useCartStore from "../../store/cartStore";

function CheckoutSuccess() {
  const clearCart = useCartStore((state) => state.clearCart);

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-3xl font-bold mb-4">Checkout Successful</h1>
      <p className="mb-4">Thank you for your purchase!</p>
      <Link to="/" className="text-blue-500 hover:underline">
        Return Home
      </Link>
    </div>
  );
}

export default CheckoutSuccess;
