"use client";
import { motion } from 'framer-motion';

export default function FeaturedProducts() {
  const products = [
    {
      id: 1,
      title: 'Cálculo Integral - Libro de estudio',
      price: '$15,000',
      image: '📕',
      seller: 'María García',
      rating: 4.8,
    },
    {
      id: 2,
      title: 'Laptop HP 15" - Poco uso',
      price: '$450,000',
      image: '💻',
      seller: 'Juan López',
      rating: 4.9,
    },
    {
      id: 3,
      title: 'Audífonos Bluetooth Sony',
      price: '$120,000',
      image: '🎧',
      seller: 'Carlos Rodríguez',
      rating: 4.7,
    },
    {
      id: 4,
      title: 'Apuntes Biología General',
      price: '$8,000',
      image: '📓',
      seller: 'Ana Martínez',
      rating: 4.6,
    },
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
        <motion.div
          className="flex justify-between items-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-accent">Productos Destacados</h2>
          <button className="text-accent font-bold hover:text-secondary">Ver todos →</button>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              className="bg-surface rounded-lg shadow-md hover:shadow-lg transition overflow-hidden border border-muted text-text"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + idx * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-background to-surface p-8 text-6xl flex items-center justify-center h-48 border border-muted">
                {product.image}
              </div>
              <div className="p-4">
                <h3 className="font-bold mb-2 line-clamp-2 text-accent">{product.title}</h3>
                <p className="text-2xl font-bold text-secondary mb-2">{product.price}</p>
                <div className="text-sm text-muted mb-4">
                  <p>{product.seller}</p>
                  <p className="text-accent">⭐ {product.rating}</p>
                </div>
                <button className="w-full bg-secondary text-primary py-2 rounded hover:bg-accent hover:text-text transition">
                  Ver detalles
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
