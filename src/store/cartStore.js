import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (product) => {
        const currentCart = get().cart;
        set({ cart: [...currentCart, product] });
      },
      removeFromCart: (id) => {
        const currentCart = get().cart;
        set({ cart: currentCart.filter((item) => item.id !== id) });
      },
      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "cart-storage",
    }
  )
);

export default useCartStore;
