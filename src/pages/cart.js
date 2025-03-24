import { useContext } from "react";
import { CartContext } from "./_app";

export default function Cart() {
  const { cart } = useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} className="flex justify-between py-2">
              <span>{item.name} ({item.selectedSize})</span>
              <span>${item.price}</span>
            </div>
          ))}
          <p className="mt-4 font-bold">Total: ${total}</p>
          <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded">
            Checkout (Stripe integration here)
          </button>
        </>
      )}
    </div>
  );
}