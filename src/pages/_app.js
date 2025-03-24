// src/pages/_app.js
import { createContext, useState } from "react";
import Navbar from "@/components/Navbar"; // Using @ alias for src/
import Footer from "@/components/Footer";
import "@/styles/globals.css"; // Assuming Tailwind is set up here

export const CartContext = createContext();

export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
    console.log("Cart updated:", [...cart, item]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </CartContext.Provider>
  );
}