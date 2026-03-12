"use client";
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <motion.section
      className="bg-gradient-to-r from-primary to-background text-text py-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl font-bold mb-6 text-accent"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
        >
          ¿Listo para empezar?
        </motion.h2>
        <motion.p
          className="text-xl mb-8 opacity-90 text-muted"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          viewport={{ once: true }}
        >
          Únete a miles de estudiantes que confían en Market Students
        </motion.p>
        <motion.div
          className="flex flex-col md:flex-row gap-4 justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <button className="px-8 py-4 bg-secondary text-primary font-bold rounded-lg shadow hover:bg-accent hover:text-text transition">
            Crear cuenta
          </button>
          <button className="px-8 py-4 border-2 border-accent text-accent font-bold rounded-lg hover:bg-accent hover:text-text transition">
            Saber más
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}
