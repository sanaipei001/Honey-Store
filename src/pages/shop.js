import ProductCard from "../components/ProductCard";

const products = [
  { id: 1, name: "Wildflower Honey", prices: { "8oz": 10, "16oz": 18, "32oz": 30 }, image: "/honey1.jpg" },
  { id: 2, name: "Clover Honey", prices: { "9oz": 12, "16oz": 20, "32oz": 35 }, image: "/honey2.jpg" },
  { id: 3, name: "Clover Honey", prices: { "6oz": 14, "16oz": 20, "32oz": 35 }, image: "/honey1.jpg" },
  { id: 4, name: "Clover Honey", prices: { "14oz": 19, "16oz": 20, "32oz": 35 }, image: "/honey4.jpg" },
  { id: 5, name: "Clover Honey", prices: { "8oz": 15, "16oz": 20, "32oz": 35 }, image: "/honey5.jpg" },
  { id: 6, name: "Clover Honey", prices: { "9oz": 10, "16oz": 20, "32oz": 35 }, image: "/honey6.jpg" },
  { id: 7, name: "Clover Honey", prices: { "5oz": 17, "16oz": 20, "32oz": 35 }, image: "/honey7.jpg" },
  { id: 8, name: "Clover Honey", prices: { "4oz": 12, "16oz": 20, "32oz": 35 }, image: "/honey8.jpg" },
];

export default function Shop() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Our Honey</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}