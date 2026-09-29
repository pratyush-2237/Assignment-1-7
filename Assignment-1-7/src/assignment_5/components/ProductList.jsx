import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 55000,
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
  },
  {
    id: 2,
    name: "Smartphone",
    price: 25000,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
  },
  {
    id: 3,
    name: "Headphones",
    price: 2500,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
  },
  {
    id: 4,
    name: "Smart Watch",
    price: 5000,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
  },
  {
    id: 5,
    name: "Camera",
    price: 45000,
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
  },
  {
    id: 6,
    name: "Sneakers",
    price: 3500,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
  },
];

function ProductList() {
  return (
    <div className="products">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;