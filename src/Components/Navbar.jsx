import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="
      w-full sticky top-0 left-0 z-50 
      bg-white/20 backdrop-blur-xl 
      border-b border-white/30 
      shadow-[0_4px_30px_rgba(0,0,0,0.4)]

    "
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="
            text-3xl font-extrabold 
            bg-gradient-to-r from-blue-500 via-purple-500 to-orange-400 
            text-transparent bg-clip-text 
            animate-[shine_3s_linear_infinite]
          "
        >
          AdyaaStore
        </motion.h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          {[
            {
              nav: "Home",
              path: "/",
            },
            {
              nav: "Products",
              path: "/Products",
            },
            {
              nav: "UpdateProduct",
              path: "/UpdateProduct",
            },
            { nav: "Contact",
              path: "/Contact" },].map((item, i) => (
                <motion.div
              key={i}
              href="#"
              whileHover={{ scale: 1.1 }}
              className="
              relative transition 
              text-gray-800 
              hover:text-orange-500
              after:absolute after:left-0 after:-bottom-1 
              after:w-0 hover:after:w-full 
              after:h-[2px] after:bg-gradient-to-r 
              after:from-blue-500 after:to-orange-500 
              after:transition-all
              ">
                <NavLink to={item.path}>
               

              {item.nav} 
            </NavLink>
            </motion.div>
          ))}


        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="
            md:hidden 
            bg-white/40 backdrop-blur-lg 
            border-t border-gray-200 
            shadow-xl 
          "
        >
          <div className="flex flex-col px-6 py-4 text-gray-700 font-medium gap-4">
            {["Home", "Products", "About", "Contact"].map((item, i) => (
              <a key={i} href="#" className="hover:text-orange-500 transition">
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
