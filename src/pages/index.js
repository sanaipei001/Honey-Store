import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-yellow-50">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/honey-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Welcome to Honey Store</h1>
          <p className="text-lg md:text-xl mb-6">Pure, natural honey straight from the hive.</p>
          <Link href="/shop">
            <button className="px-8 py-4 bg-amber-600 text-white text-lg font-semibold rounded hover:bg-amber-700 transition">
              Shop Now
            </button>
          </Link>
        </div>
      </section>

      {/* Importance of Honey Section */}
      <section className="py-16 px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-800 mb-12">
          Why Honey Matters
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-amber-600 mb-2">Natural Sweetener</h3>
            <p className="text-gray-800">A healthier alternative to sugar, packed with flavor and nutrients.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-amber-600 mb-2">Antioxidant Rich</h3>
            <p className="text-gray-800">Fights free radicals, supporting overall health and wellness.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-amber-600 mb-2">Boosts Immunity</h3>
            <p className="text-gray-800">Contains natural properties that strengthen your immune system.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-amber-600 mb-2">Soothes Coughs</h3>
            <p className="text-gray-800">A natural remedy for sore throats and coughs, trusted for centuries.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-amber-600 mb-2">Supports Digestion</h3>
            <p className="text-gray-800">Aids in gut health with its prebiotic and antibacterial effects.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-amber-600 mb-2">Eco-Friendly</h3>
            <p className="text-gray-800">Bees pollinate crops, making honey a sustainable choice.</p>
          </div>
        </div>
      </section>
    </div>
  );
}