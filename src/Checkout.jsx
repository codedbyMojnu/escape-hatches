import { useState } from "react";
import { useCart } from "./context/ProductContext";

export default function Checkout() {
  const [billingInfo, setBillingInfo] = useState({
    name: "",
    phone: "",
    address: "",
  });
  const [successMsg, setSuccessMsg] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const { items, dispatch } = useCart();

  //function handler order
  function handleOrder() {
    if (
      items.length > 0 &&
      billingInfo.name &&
      billingInfo.phone &&
      billingInfo.address
    ) {
      console.log("order successfull");
      console.log({ billingInfo, items });
      setSuccessMsg(true);
      dispatch({
        type: "RESET_CART",
      });
    } else {
      setErrorMsg(true);
      console.log("Fill all billing infor or No Product");
    }
  }

  // Style for inputs (same on focus and blur)
  const inputStyle = {
    display: "block",
    width: "70%",
    margin: "20px",
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    outline: "none",
  };

  const flexStyle = {
    display: "flex",
    flexWrap: "wrap",
  };
  return (
    <>
      {!successMsg ? (
        <div
          style={{
            padding: "20px",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          <h1 style={{ marginBottom: "20px", textAlign: "center" }}>
            Checkout
          </h1>
          {errorMsg && (
            <p style={{ color: "red" }}>
              Fill the billing Info and At least 1 Product Should in Cart
            </p>
          )}
          <div style={flexStyle}>
            <div style={{ flex: "50%" }}>
              <h2>Billing Info</h2>
              <input
                type="text"
                style={inputStyle}
                placeholder="Enter your name"
                value={billingInfo.name}
                onChange={(e) =>
                  setBillingInfo({ ...billingInfo, name: e.target.value })
                }
              />
              <input
                type="text"
                style={inputStyle}
                placeholder="Phone"
                value={billingInfo.phone}
                onChange={(e) =>
                  setBillingInfo({ ...billingInfo, phone: e.target.value })
                }
              />
              <input
                type="text"
                style={inputStyle}
                placeholder="Address"
                value={billingInfo.address}
                onChange={(e) =>
                  setBillingInfo({ ...billingInfo, address: e.target.value })
                }
              />
            </div>
            <div style={{ flex: "50%" }}>
              <h2>Order Summary</h2>
              {items.map((item) => (
                <div key={item.id}>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>Quantity: {item.quantity}</div>
                    <div>{item.name}</div>
                    <div>৳{item.price}</div>
                  </div>
                  <hr />
                </div>
              ))}
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>Total: </div>
                <div>
                  ৳{items.reduce((total, item) => total + item.price, 0)}
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={handleOrder}
            style={{
              marginLeft: "20px",
              backgroundColor: "red",
              color: "white",
              padding: "8px 24px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Create Order
          </button>
        </div>
      ) : (
        <h2 style={{ padding: "20px" }}>Success. Order Created.</h2>
      )}
    </>
  );
}
