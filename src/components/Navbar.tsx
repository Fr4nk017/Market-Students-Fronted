"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="bg-primary shadow-md sticky top-0 z-50"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-accent">
              <span className="bg-secondary text-primary rounded-lg p-2">MS</span>
              Market Students
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <motion.div
            className="hidden md:flex gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Link href="/mercado" className="hover:text-accent transition">Mercado Estudiantil</Link>
            <Link href="#" className="hover:text-accent transition">Cómo funciona</Link>
            <Link href="#" className="hover:text-accent transition">Ofertas</Link>
            <Link href="#" className="hover:text-accent transition">Contacto</Link>
          </motion.div>

          {/* Buttons */}
          <div className="flex gap-4 items-center">
            <motion.button
              className="px-6 py-2 text-secondary border border-secondary rounded-lg hover:bg-accent hover:text-text transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Iniciar sesión
            </motion.button>
            <motion.button
              className="px-6 py-2 bg-secondary text-primary rounded-lg hover:bg-accent hover:text-text transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Registrarse
            </motion.button>
            {/* Mobile menu button */}
            <button
              className="md:hidden text-2xl"
              onClick={() => setIsOpen(!isOpen)}
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden mt-4 pb-4 space-y-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Link href="/mercado" className="block py-2 hover:text-accent">Mercado Estudiantil</Link>
              <Link href="#" className="block py-2 hover:text-accent">Cómo funciona</Link>
              <Link href="#" className="block py-2 hover:text-accent">Ofertas</Link>
              <Link href="#" className="block py-2 hover:text-accent">Contacto</Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
