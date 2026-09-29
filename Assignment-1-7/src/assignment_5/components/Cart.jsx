import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";

function Cart() {
  const { state, dispatch } = useCart();
  const [couponCode, setCouponCode] = useState("");

  const subtotal = state.cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const discount = subtotal * (state.coupon / 100);

  const afterDiscount = subtotal - discount;

  const gst = afterDiscount * 0.18;

  const grandTotal = afterDiscount + gst;

  const applyCoupon = () => {
    if (couponCode.toUpperCase() === "SAVE10") {
      dispatch({
        type: "APPLY_COUPON",
        payload: 10,
      });
      alert("10% coupon applied!");
    } else if (couponCode.toUpperCase() === "SAVE20") {
      dispatch({
        type: "APPLY_COUPON",
        payload: 20,
      });
      alert("20% coupon applied!");
    } else {
      dispatch({
        type: "APPLY_COUPON",
        payload: 0,
      });
      alert("Invalid coupon code!");
    }
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>

      {state.cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {state.cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}

          <div className="coupon">
            <input
              type="text"
              placeholder="Enter coupon code"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
            />

            <button onClick={applyCoupon}>
              Apply Coupon
            </button>
          </div>

          <div className="summary">
            <h3>Order Summary</h3>

            <p>
              Subtotal: <strong>₹{subtotal.toFixed(2)}</strong>
            </p>

            <p>
              Coupon Discount ({state.coupon}%):
              <strong> - ₹{discount.toFixed(2)}</strong>
            </p>

            <p>
              GST (18%):
              <strong> ₹{gst.toFixed(2)}</strong>
            </p>

            <hr />

            <h2>
              Grand Total: ₹{grandTotal.toFixed(2)}
            </h2>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;