import { Link } from "react-router-dom";
import CartIcon from "../svg/CartIcon";
import Cart from "./Cart";

export default function Header() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#f8f9fa",
        borderBottom: "1px solid #ddd",
      }}
    >
      {/* Logo / Brand Name */}
      <div>
        <Link
          to="/"
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            textDecoration: "none",
            color: "#333",
          }}
        >
          Dokan
        </Link>
      </div>

      {/* Cart Section */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <CartIcon />
        <Cart />
      </div>
    </div>
  );
}
