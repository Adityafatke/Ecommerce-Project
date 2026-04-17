import React, { useState, useEffect, useRef } from "react";
import { X, Heart, ShoppingCart, Filter } from "lucide-react";
import { motion } from "framer-motion";
import axios from "axios";

const ShowProduct = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [Product, setProduct] = useState([]);

  // SWIPE CLOSE REF
  const sidebarRef = useRef(null);
  let touchStartX = 0;

  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    const currentX = e.touches[0].clientX;
    if (touchStartX - currentX > 60) {
      setSidebarOpen(false);
    }
  };




  
  // Fetch product
  useEffect(() => {
    const GetData = async () => {
      try {
        const Data = await axios.get("https://localhost:7216/api/Product/GetAll");
        setProduct(Data.data.data);
      } catch (error) {
        alert(error);
      }
    };
    GetData();
  }, []);
  



  return (
    <div className="lg:flex-row flex-col flex bg-gradient-to-br from-white via-purple-50 to-white">

      {/* SIDEBAR (Static for Desktop, Sliding for Mobile/Tablet) */}
      <div
        ref={sidebarRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        className={`lg:flex w-64 lg:w-48 h-screen bg-white shadow-xl p-6 
        ${sidebarOpen ? "fixed top-0 left-0 z-40 transform translate-x-0 transition" : "hidden lg:flex"} 
        ${!sidebarOpen ? "lg:sticky lg:top-0" : ""}`}
      >
        <div className="flex justify-between items-center mb-6 lg:hidden">
          <h3 className="text-xl font-semibold">Filters</h3>
          <button onClick={() => setSidebarOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <Filters
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>

      {/* BACKDROP (Mobile/Tablet) */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* FLOATING TOGGLE BUTTON (Mobile/Tablet) */}
      <button
        className="fixed bottom-6 left-6 z-50 lg:hidden p-4 bg-purple-600 
        text-white rounded-full shadow-2xl"
        onClick={() => setSidebarOpen(true)}
      >
        <Filter size={24} />
      </button>

      {/* PRODUCT GRID */}
      <section className="flex-1 px-6 py-10">
        <h3 className="text-3xl font-bold mb-6">Trending Products</h3>

        {/* PRODUCT LIST */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {Product.map((p) => (
            <motion.div
              key={p.id}
              className="bg-white p-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-full h-56 overflow-hidden rounded-xl">
                <img
                  src={p.imagePath}
                  className="w-full h-full object-fill group-hover:scale-110 transition"
                />
              </div>

              <div className="mt-3 flex justify-between">
                <h4 className="font-semibold text-lg">{p.name}</h4>
                <Heart className="w-5 h-5 text-gray-500 hover:text-red-500 cursor-pointer" />
              </div>

              <div className="flex gap-2">
                <p className="text-purple-600 font-bold mt-1">₹ {p.price}</p>
                <p className="text-purple-600 font-bold mt-1">
                  ₹<del>{p.price + 15540}</del>
                </p>
              </div>

              <p className="text-purple-600 font-bold mt-1">
                {p.description}
              </p>

              <div className="flex flex-row gap-3">
                <button className="mt-3 w-full bg-purple-600 text-white py-2 rounded-xl flex items-center justify-center gap-2 hover:bg-purple-700 transition">
                  <ShoppingCart className="w-5 h-5" />
                  Cart
                </button>

                <button className="mt-3 w-full bg-purple-600 text-white py-2 rounded-xl flex items-center justify-center gap-2 hover:bg-purple-700 transition">
                  Buy Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

/* --------------------- FILTER COMPONENT --------------------- */
const Filters = ({ selectedCategory, setSelectedCategory }) => (
  <div>
    <h4 className="font-semibold mb-3 text-lg">Category</h4>

    <div className="flex flex-col lg:flex-col md:flex-row flex-wrap gap-3">
      {["All", "Watch", "Headphones", "Bag", "Sunglasses"].map((cat) => (
        <label
          key={cat}
          className={`px-3 py-2 rounded-xl text-center cursor-pointer border shadow-sm 
          ${
            selectedCategory === cat
              ? "bg-purple-600 text-white border-purple-600"
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

    <div className="mt-6">
      <h4 className="font-semibold mb-2 text-lg">Price</h4>
      {["₹0 - ₹1000", "₹1000 - ₹5000", "₹5000+"].map((price) => (
        <div key={price} className="flex gap-2 mb-2">
          <input type="checkbox" className="accent-purple-600" />
          <label>{price}</label>
        </div>
      ))}
    </div>
  </div>
);

export default ShowProduct;