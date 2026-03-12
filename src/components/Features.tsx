"use client";
import { motion } from 'framer-motion';

export default function Features() {
  const features = [
    {
      icon: '🔒',
      title: 'Compras Seguras',
      description: 'Sistemas de pago verificados y protección para comprador y vendedor',
    },
    {
      icon: '💬',
      title: 'Chat Directo',
      description: 'Comunícate directamente con otros estudiantes de forma segura',
    },
    {
      icon: '⭐',
      title: 'Reputación',
      description: 'Calificaciones y reseñas pour generar confianza en la comunidad',
    },
    {
      icon: '📱',
      title: 'Fácil de Usar',
      description: 'Interfaz intuitiva diseñada para estudiantes, por estudiantes',
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
        <motion.h2
          className="text-4xl font-bold text-center mb-16 text-accent"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
        >
          ¿Por qué elegir Market Students?
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-surface p-6 rounded-lg shadow-md hover:shadow-lg transition border border-muted text-text"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-accent">{feature.title}</h3>
              <p className="text-muted">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
