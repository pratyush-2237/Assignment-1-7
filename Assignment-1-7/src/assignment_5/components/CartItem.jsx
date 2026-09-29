import React from "react";
import { useCart } from "../context/CartContext";

function CartItem({ item }) {
  const { dispatch } = useCart();

  return (
    <div className="cart-item">
      <div>
        <h3>{item.name}</h3>
        <p>₹{item.price}</p>
      </div>

      <div className="quantity">
        <button
          onClick={() =>
            dispatch({
              type: "DECREASE",
              payload: item.id,
            })
          }
        >
          -
        </button>

        <span>{item.quantity}</span>

        <button
          onClick={() =>
            dispatch({
              type: "INCREASE",
              payload: item.id,
            })
          }
        >
          +
        </button>
      </div>

      <p>
        ₹{(item.price * item.quantity).toFixed(2)}
      </p>

      <button
        className="remove"
        onClick={() =>
          dispatch({
            type: "REMOVE_ITEM",
            payload: item.id,
          })
        }
      >
        Remove
      </button>
    </div>
  );
}

export default CartItem;