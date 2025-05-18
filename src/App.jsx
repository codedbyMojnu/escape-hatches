import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CartPage from "./CartPage";
import Checkout from "./Checkout";
import CartProvider from "./context/ProductContext";
import Header from "./Header";
import HomePage from "./HomePage";

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
