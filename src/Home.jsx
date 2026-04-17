import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Heart, Star } from "lucide-react";

export default function Home() {
  const products = [
    {
      id: 1,
      name: "Luxury Watch",
      price: "₹12,999",
      image: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg",
    },
    {
      id: 2,
      name: "Stylish Sneakers",
      price: "₹4,499",
      image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
    },
    {
      id: 3,
      name: "Diamond Ring",
      price: "₹54,999",
      image: "https://images.pexels.com/photos/1457801/pexels-photo-1457801.jpeg",
    },
    {
      id: 4,
      name: "Premium Headphones",
      price: "₹7,499",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLryysv3Bh7q7y6IKVbMsMGKmlV5JXw4JRSQ&s",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 text-gray-900">
      {/* Hero Section */}
      <section className="w-full min-h-[70vh] pt-10 flex flex-col-reverse md:flex-row items-center pt-5 justify-between max-w-7xl  px-5 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight drop-shadow-md">
            Premium Products for a {" "}
            <span className="text-purple-600">Premium You</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg mt-4 max-w-lg mx-auto md:mx-0">
            Discover the best curated luxury items, crafted with elegance and perfection.
          </p>
          <button className="mt-6 px-6 py-3 rounded-xl bg-purple-600 text-white font-semibold shadow-lg hover:bg-purple-700 transition-all">
            Shop Now
          </button>
        </motion.div>

        <motion.img
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg"
          className="w-64 h-64 sm:w-80 sm:h-80 md:w-[430px] md:h-[430px] object-cover rounded-3xl shadow-2xl"
        />
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h3 className="text-2xl md:text-3xl font-bold mb-6">Trending Products</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {products.map((p) => (
            <motion.div
              key={p.id}
              className="bg-white p-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-full h-48 sm:h-56 md:h-60 overflow-hidden rounded-xl">
                <img
                  src={p.image}
                  className="w-full h-full object-fill group-hover:scale-105 transition-transform duration-300"
                  // loading="lazy"
                />
              </div>

              <div className="mt-3 flex justify-between items-center">
                <h4 className="font-semibold text-lg">{p.name}</h4>
                <Heart className="w-5 h-5 text-gray-500 hover:text-red-500 cursor-pointer" />
              </div>

              <p className="text-purple-600 font-bold mt-1">{p.price}</p>
              <div className="flex flex-row gap-3">
                <button className="mt-3 w-32 bg-purple-600 text-white rounded-xl flex items-center justify-center gap-2 hover:bg-purple-700 transition">
                  <ShoppingCart className="w-5 h-5" /> Add to Cart
                </button>
                <button className="mt-3 w-24 bg-purple-600 text-white p-2 rounded-xl flex items-center justify-center gap-2 hover:bg-purple-700 transition">
                  Buy Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}