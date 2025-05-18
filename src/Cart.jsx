import { Link } from "react-router-dom";
import { useCart } from "./context/ProductContext";

export default function Cart() {
  const { items } = useCart();
  return (
    <div>
      <Link to="/cart">Total {items?.length} Buy</Link>
    </div>
  );
}
