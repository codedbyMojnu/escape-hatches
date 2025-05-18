import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { items } = useCart();
  return (
    <div>
      <Link to="/cart">Total {items?.length} Buy</Link>
    </div>
  );
}
