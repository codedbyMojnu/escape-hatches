import { createContext, useContext, useReducer } from "react";
import cartReducer from "../reducer/cart-reducer";

const ProductContext = createContext(null);
const CartContext = createContext(null);

export default function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ items, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
