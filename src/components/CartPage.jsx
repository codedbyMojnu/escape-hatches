import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const [alertText, setAlertText] = useState(false);
  const { items, dispatch } = useCart();
  const navigate = useNavigate();

  function handleRemoveFromCart(item) {
    dispatch({
      type: "removedFromCart",
      item,
    });
  }

  function handleIncreaseQuantity(item) {
    dispatch({
      type: "INCREASE_QUANTITY",
      item,
    });
    setAlertText(false);
  }

  function handleDecreaseQuantity(item) {
    if (item.quantity > 1) {
      dispatch({
        type: "DECREASE_QUANTITY",
        item,
      });
      setAlertText(false);
    } else {
      setAlertText(true);
    }
  }
  return (
    <div style={{ padding: "20px" }}>
      {alertText && <p style={{ color: "red" }}>Not Should be Less Than 1</p>}
      <h2 style={{ marginBottom: "20px" }}>Your Cart</h2>
      {items.length > 0
        ? items.map((item, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "10px",
                marginBottom: "10px",
                maxWidth: "100vw",
              }}
            >
              <p style={{ fontWeight: "bold", margin: "4px 0" }}>{item.name}</p>
              <div style={{ display: "flex", gap: "6px", marginTop: "10px" }}>
                <p style={{ margin: "4px 0" }}>${item.price}</p>
                <p style={{ margin: "4px 0" }}>Quantity: {item.quantity}</p>
              </div>

              <div style={{ display: "flex", gap: "6px", marginTop: "10px" }}>
                <button
                  onClick={() => handleIncreaseQuantity(item)}
                  style={{ padding: "4px 8px" }}
                >
                  +
                </button>
                <button
                  onClick={() => handleDecreaseQuantity(item)}
                  style={{ padding: "4px 8px" }}
                >
                  -
                </button>
                <button
                  style={{
                    padding: "4px 8px",
                    backgroundColor: "#f44336",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                  }}
                  onClick={() => handleRemoveFromCart(item)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        : "Cart is Empty"}
      {items.length > 0 && (
        <button
          onClick={() => navigate("/checkout")}
          style={{
            backgroundColor: "red",
            color: "white",
            padding: "6px 12px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Checkout
        </button>
      )}
    </div>
  );
}
