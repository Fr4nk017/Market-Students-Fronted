"use client";
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <motion.section
      className="bg-gradient-to-r from-primary to-background text-text py-24"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:items-start gap-12">
        <motion.div
          className="w-full md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src="/images/principal.jpg" 
            alt="Market Students Hero" 
            className="rounded-2xl shadow-2xl border-4 border-accent max-w-md md:max-w-lg w-full h-[320px] md:h-[400px] object-cover mx-auto"
          />
        </motion.div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6 text-accent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Marketplace Seguro para Estudiantes
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 opacity-90 text-muted"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            Compra y vende con confianza. La plataforma diseñada especialmente para la comunidad estudiantil.
          </motion.p>
          <motion.div
            className="flex flex-col md:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <button className="px-8 py-4 bg-secondary text-primary font-bold rounded-lg shadow hover:bg-accent hover:text-text transition">
              Explorar productos
            </button>
            <button className="px-8 py-4 border-2 border-accent text-accent font-bold rounded-lg hover:bg-accent hover:text-text transition">
              Empezar a vender
            </button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
