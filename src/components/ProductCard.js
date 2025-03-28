// src/components/ProductCard.js
import { useContext, useState } from "react";
import { useRouter } from "next/router"; // Import useRouter for navigation
import { CartContext } from "@/pages/_app";

export default function ProductCard({ product }) {
  const cartContext = useContext(CartContext);
  const { addToCart } = cartContext || {};
  const [size, setSize] = useState("8oz");
  const router = useRouter(); // Initialize router

  const handleAddToCart = () => {
    if (!addToCart) {
      console.error("CartContext is not provided correctly.");
      return;
    }
    const item = { ...product, selectedSize: size, price: product.prices[size] };
    addToCart(item); // Add item to cart
    router.push("/cart"); // Redirect to cart page
  };

  return (
    <div className="border p-4 rounded shadow">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
      <select
        value={size}
        onChange={(e) => setSize(e.target.value)}
        className="mt-2 p-2 border rounded"
      >
        {Object.keys(product.prices).map((sizeOption) => (
          <option key={sizeOption} value={sizeOption}>
            {sizeOption} - ${product.prices[sizeOption]}
          </option>
        ))}
      </select>
      <button
        onClick={handleAddToCart}
        className="mt-4 w-full bg-amber-600 text-white py-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}