import { Link } from "react-router-dom";
import useCartStore from "../store/cartStore";

function CartIcon() {
  const cart = useCartStore((state) => state.cart);
  const itemCount = cart.reduce((total, item) => total + (item.quantity || 1), 0);

  return (
    <Link to="cart/" className="relative text-xl">
      <i className="fa-solid fa-cart-shopping"></i>
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </Link>
  );
}

export default CartIcon;
