import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CartPage from "./components/CartPage";
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import CartProvider from "./context/CartContext";

export default function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}
