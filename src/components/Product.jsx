import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Product({ product }) {
  const navigate = useNavigate();
  const { items, dispatch } = useCart();
  const isInCart = items?.filter((item) => item.id === product.id);

  function handleAddToCart(item) {
    dispatch({
      type: "addedToCart",
      item,
    });
  }

  function handleRemoveFromCart(item) {
    dispatch({
      type: "removedFromCart",
      item,
    });
  }

  function handleCheckout(item) {
    const itemExist = items.some((product) => product.id === item.id);
    if (!itemExist) handleAddToCart(item);
    navigate("/checkout");
  }

  return (
    <div
      style={{
        padding: "16px",
        border: "1px solid #e0e0e0",
        borderRadius: "10px",
        width: "250px",
        backgroundColor: "#fff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        transition: "transform 0.5s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <h2 style={{ fontSize: "1.2rem", marginBottom: "10px" }}>
        {product.name}
      </h2>
      <p style={{ fontSize: "0.9rem", color: "#555" }}>{product.description}</p>
      <p style={{ fontWeight: "bold", margin: "8px 0" }}>৳ {product.price}</p>

      <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        {isInCart?.length > 0 ? (
          <button
            onClick={() => handleRemoveFromCart(product)}
            style={buttonStyle("red")}
          >
            Remove
          </button>
        ) : (
          <button
            onClick={() => handleAddToCart(product)}
            style={buttonStyle("green")}
          >
            Buy Now
          </button>
        )}

        <button
          onClick={() => handleCheckout(product)}
          style={buttonStyle("blue")}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

function buttonStyle(color) {
  return {
    padding: "6px 12px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: color,
    color: "#fff",
    cursor: "pointer",
  };
}
