import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (product) => {
        const currentCart = get().cart;
        const existingProduct = currentCart.find(item => item.id === product.id);

        if (existingProduct) {
          set({
            cart: currentCart.map(item =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          });
        } else {
          set({
            cart: [...currentCart, { ...product, quantity: 1 }]
          });
        }
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
