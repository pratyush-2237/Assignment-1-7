import React from "react";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { dispatch } = useCart();

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />

      <h3>{product.name}</h3>

      <p>₹{product.price}</p>

      <button
        onClick={() =>
          dispatch({
            type: "ADD_TO_CART",
            payload: product,
          })
        }
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;