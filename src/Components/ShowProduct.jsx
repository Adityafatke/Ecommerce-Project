import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

 const products = [
  { id: 1, name: "Luxury Watch", price: "$299", image: "https://ad.kapoorwatch.com/content/images/product/525.CO.0180.LR.DEL25-400.webp" },
  { id: 2, name: "Smart Headphones", price: "$199", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAJHnWieMbS6-ArTo3urrlPQTBfg9YCeRfxg&s" },
  { id: 3, name: "Leather Bag", price: "$149", image: "https://via.placeholder.com/300x300" },
  { id: 4, name: "Sunglasses", price: "$89", image: "https://via.placeholder.com/300x300" },
  
];

const ShowProduct = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.name.includes(selectedCategory));

  return (
    <div className="flex ">
      {/* Sidebar for desktop/tablet with auto width */}
      <div className="hidden md:flex flex-shrink-0 h-screen sticky bg-white shadow-lg p-4 overflow-y-auto z-20 max-w-max">
        <Filters selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-white shadow-lg p-6 overflow-y-auto z-30 transform transition-transform duration-300 md:hidden ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold">Filters</h3>
          <button onClick={() => setSidebarOpen(false)}>
            <X size={24} />
          </button>
        </div>
        <Filters selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      </div>

      {/* Mobile toggle button */}
      <button
        className="fixed top-6 left-6 z-40 md:hidden p-2 bg-indigo-600 text-white rounded-lg shadow-lg"
        onClick={() => setSidebarOpen(true)}
      >
        <Menu size={24} />
      </button>

      {/* Product Grid */}
     {/* Product Grid */}
<section className="flex-1 p-4 md:p-0 m-2 overflow-y-auto h-screen">
  <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Our Products</h2>

  {/* Horizontal filters only on mobile/tablet */}
  <div className="mb-4 md:hidden">
    <Filters selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} horizontal />
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    {filteredProducts.map((product) => (
      <div
        key={product.id}
        className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl"
      >
        <div className="relative group">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 md:h-56 lg:h-60 object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-4 space-y-2">
          <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
          <p className="text-indigo-600 font-bold">{product.price}</p>
          <div className="flex space-x-2 mt-2">
            <button className="flex-1 px-3 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition">
              Add to Cart
            </button>
            <button className="flex-1 px-3 py-2 border border-indigo-600 text-indigo-600 text-sm font-medium rounded-lg hover:bg-indigo-600 hover:text-white transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

    </div>
  );
};

// Unified Filters component
const Filters = ({ selectedCategory, setSelectedCategory, horizontal }) => (
  <div>
    <h4 className="font-medium mb-2">Category</h4>
    <div className={`flex ${horizontal ? "flex-wrap" : "flex-col"} gap-2`}>
      {["All", "Watch", "Headphones", "Bag", "Sunglasses"].map((cat) => (
        <label
          key={cat}
          className={`flex-1 min-w-[70px] px-2 py-1 border rounded-lg text-center cursor-pointer ${
            selectedCategory === cat
              ? "bg-indigo-600 text-white border-indigo-600"
              : "bg-white text-gray-700 border-gray-300"
          }`}
        >
          <input
            type="radio"
            name="category"
            value={cat}
            checked={selectedCategory === cat}
            onChange={() => setSelectedCategory(cat)}
            className="hidden"
          />
          {cat}
        </label>
      ))}
    </div>

    {/* Price Filter */}
    <div className="mt-2">
      <h4 className="font-medium mb-2">Price</h4>
      {["$0 - $100", "$100 - $200", "$200+"].map((price) => (
        <div key={price} className="flex items-center gap-2 mb-1">
          <input type="checkbox" className="accent-indigo-600" />
          <label className="text-gray-700">{price}</label>
        </div>
      ))}
    </div>
  </div>
);

export default ShowProduct;
