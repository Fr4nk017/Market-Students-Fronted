"use client";
import { motion } from 'framer-motion';

export default function Categories() {
  const categories = [
    { name: 'Libros', icon: '📚', count: '1,234' },
    { name: 'Electrónica', icon: '💻', count: '856' },
    { name: 'Ropa', icon: '👕', count: '2,145' },
    { name: 'Apuntes', icon: '📝', count: '3,456' },
    { name: 'Deportes', icon: '⚽', count: '567' },
    { name: 'Accesorios', icon: '👜', count: '1,789' },
  ];

  return (
    <motion.section
      className="py-16 bg-background"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 text-accent"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
        >
          Categorías Populares
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.button
              key={index}
              className="bg-gradient-to-br from-background to-surface p-8 rounded-lg hover:shadow-lg transition transform hover:scale-105 text-text border border-muted"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl mb-4">{category.icon}</div>
              <h3 className="text-2xl font-bold text-accent">{category.name}</h3>
              <p className="text-muted mt-2">{category.count} productos</p>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
