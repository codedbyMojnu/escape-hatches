import { useNavigate } from "react-router-dom";
import { useCart } from "./context/ProductContext";

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

    if (!itemExist) {
      handleAddToCart(item);
    }
    navigate("/checkout");
  }
  return (
    <div
      style={{
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        maxWidth: "300px",
      }}
    >
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <div style={{ display: "flex", gap: "8px", marginTop: "10px" }}>
        {isInCart?.length > 0 ? (
          <button onClick={() => handleRemoveFromCart(product)}>
            Remove from Cart
          </button>
        ) : (
          <button onClick={() => handleAddToCart(product)}>Buy Now</button>
        )}
        <button onClick={() => handleCheckout(product)}>Checkout</button>
      </div>
    </div>
  );
}
