import { motion } from "framer-motion";
import Navbar from './Navbar';
import { HeroSection } from './HeroSection';
import { FeatureCards } from './FeatureCards';

export default function Dashboard() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar */}
      {/* <Navbar />

      {/* Hero Section */}
      {/* <HeroSection /> */}

      {/* Feature Cards */}
      {/* <FeatureCards /> */ }

      {/* Dashboard Content Area */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-extrabold mb-8 text-gray-900">Dashboard Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div whileHover={{ scale: 1.03 }} className="p-6 rounded-2xl shadow-lg bg-white border border-gray-200">
            <h3 className="text-xl font-semibold mb-2">Total Products</h3>
            <p className="text-gray-600 text-lg">120</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} className="p-6 rounded-2xl shadow-lg bg-white border border-gray-200">
            <h3 className="text-xl font-semibold mb-2">Active Users</h3>
            <p className="text-gray-600 text-lg">350</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} className="p-6 rounded-2xl shadow-lg bg-white border border-gray-200">
            <h3 className="text-xl font-semibold mb-2">Revenue</h3>
            <p className="text-gray-600 text-lg">$14,500</p>
          </motion.div>
        </div>

        {/* Additional Charts / Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <motion.div whileHover={{ scale: 1.02 }} className="p-6 rounded-2xl shadow-lg bg-white border border-gray-200 h-72">
            <h3 className="text-xl font-semibold mb-4">Sales Chart</h3>
            {/* Placeholder for chart */}
            <div className="w-full h-full bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">Chart Area</div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} className="p-6 rounded-2xl shadow-lg bg-white border border-gray-200 h-72">
            <h3 className="text-xl font-semibold mb-4">Recent Orders</h3>
            <div className="w-full h-full bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">Table Area</div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 bg-white/50 backdrop-blur-xl border-t border-white/30 mt-16 text-center text-gray-600">
        © 2025 AdyaaStore. All rights reserved.
      </footer>
    </div>
  );
}