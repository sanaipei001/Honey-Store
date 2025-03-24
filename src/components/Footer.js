// src/components/Footer.js
export default function Footer() {
    return (
      <footer className="bg-amber-600 text-white p-4 mt-auto">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Honey Store. All rights reserved.</p>
          <p>Contact us: info@honeystore.com | (123) 456-7890</p>
        </div>
      </footer>
    );
  }