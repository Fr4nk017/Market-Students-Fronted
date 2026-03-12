"use client";
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import Link from 'next/link';

export default function Mercado() {
  const [tab, setTab] = useState<'mercado' | 'intercambios'>('mercado');

  // Productos de ejemplo
  const productos = [
    {
      id: 1,
      nombre: 'Calculadora Científica Casio',
      precio: 18000,
      universidad: 'U. de Chile',
      imagen: '/images/calculadora.jpg',
    },
    {
      id: 2,
      nombre: 'Libro Álgebra Lineal',
      precio: 12000,
      universidad: 'PUC',
      imagen: '/images/libro.jpg',
    },
    {
      id: 3,
      nombre: 'Notebook Lenovo i5',
      precio: 250000,
      universidad: 'USACH',
      imagen: '/images/notebook.jpg',
    },
    {
      id: 4,
      nombre: 'Auriculares Bluetooth',
      precio: 15000,
      universidad: 'Duoc UC',
      imagen: '/images/audifonos.jpg',
    },
  ];
  return (
    <main className="min-h-screen bg-[#0B0B0C] font-sans">
      <Navbar />
      {/* Tabs para alternar entre Mercado e Intercambios */}
      <section className="max-w-6xl mx-auto px-4 z-20 relative">
        <div className="flex gap-2 mb-6 mt-12">
          <button
            className={`px-6 py-2 rounded-t-xl font-bold text-lg transition-all duration-200 focus:outline-none ${tab === 'mercado' ? 'bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 text-white shadow-lg' : 'bg-[#23233a] text-white/60 hover:text-white'}`}
            onClick={() => setTab('mercado')}
          >
            Mercado Estudiantil
          </button>
          <button
            className={`px-6 py-2 rounded-t-xl font-bold text-lg transition-all duration-200 focus:outline-none ${tab === 'intercambios' ? 'bg-gradient-to-r from-orange-400 via-pink-500 to-violet-600 text-white shadow-lg' : 'bg-[#23233a] text-white/60 hover:text-white'}`}
            onClick={() => setTab('intercambios')}
          >
            Intercambios
          </button>
        </div>
      </section>
      {/* Barra de búsqueda avanzada */}
      <section className="max-w-6xl mx-auto px-4 z-20 relative">
        <form className="w-full flex flex-col md:flex-row items-center justify-center bg-white/10 border border-white/10 rounded-2xl shadow-xl backdrop-blur-xl px-4 py-3 mt-12 animate-fade-in-up transition-all duration-500 hover:shadow-2xl group">
          <div className="w-full flex items-center gap-0">
            <span className="text-accent text-2xl ml-2 mr-3">🔍</span>
            <input
              type="text"
              placeholder="Buscar productos, servicios o usuarios..."
              className="flex-1 h-12 bg-transparent outline-none text-white placeholder-white/80 font-medium text-lg px-2 transition-all focus:placeholder-white/90 min-w-[180px] rounded-l-2xl border border-accent/40 border-r-0"
              style={{borderTopRightRadius:0, borderBottomRightRadius:0}}
            />
            <select className="h-12 bg-[#23233a] border-t border-b border-accent/40 border-l-0 border-r-0 px-4 text-white font-medium focus:ring-2 focus:ring-accent transition-all hover:bg-accent/10 min-w-[130px] rounded-none">
              <option value="">Categoría</option>
              <option value="tecnologia">Tecnología</option>
              <option value="libros">Libros</option>
              <option value="servicios">Servicios</option>
              <option value="ropa">Ropa</option>
              <option value="otros">Otros</option>
            </select>
            <select className="h-12 bg-[#23233a] border-t border-b border-accent/40 border-l-0 border-r-0 px-4 text-white font-medium focus:ring-2 focus:ring-accent transition-all hover:bg-accent/10 min-w-[120px] rounded-none">
              <option value="">Precio</option>
              <option value="menor">Menor a mayor</option>
              <option value="mayor">Mayor a menor</option>
            </select>
            <select className="h-12 bg-[#23233a] border-t border-b border-accent/40 border-l-0 border-r-0 px-4 text-white font-medium focus:ring-2 focus:ring-accent transition-all hover:bg-accent/10 min-w-[130px] rounded-none">
              <option value="">Ubicación</option>
              <option value="santiago">Santiago</option>
              <option value="valparaiso">Valparaíso</option>
              <option value="concepcion">Concepción</option>
              <option value="otros">Otros</option>
            </select>
            <select className="h-12 bg-[#23233a] border-t border-b border-accent/40 border-l-0 border-r-0 px-4 text-white font-medium focus:ring-2 focus:ring-accent transition-all hover:bg-accent/10 min-w-[170px] rounded-none">
              <option value="">Instituto/Universidad</option>
              <option value="duoc">Duoc UC</option>
              <option value="uchile">U. de Chile</option>
              <option value="puc">PUC</option>
              <option value="utfsm">UTFSM</option>
              <option value="usach">USACH</option>
              <option value="udp">UDP</option>
              <option value="otros">Otros</option>
            </select>
            <button
              type="submit"
              className="h-12 flex items-center gap-2 px-6 rounded-r-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 text-white font-bold shadow-lg hover:scale-105 hover:shadow-accent/40 transition-all duration-200 focus:ring-2 focus:ring-accent group-hover:scale-110 min-w-[110px] border-0"
              style={{marginLeft: '-1px', borderTopLeftRadius:0, borderBottomLeftRadius:0}}
            >
              <span className="lowercase">buscar</span>
              <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>
        </form>
      </section>
      <section className="max-w-6xl mx-auto px-4 py-16">
        {tab === 'mercado' ? (
          <>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 drop-shadow-lg">Mercado de Productos y Servicios</h1>
            <p className="text-lg text-white/70 mb-12 max-w-2xl">Explora todos los productos y servicios publicados por estudiantes. Usa los filtros para encontrar lo que necesitas de manera rápida y segura.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {productos.map((prod) => (
                <div key={prod.id} className="bg-white/10 border border-white/10 rounded-2xl shadow-xl backdrop-blur-xl p-4 flex flex-col items-center hover:scale-105 transition-transform duration-200">
                  <div className="w-full h-40 bg-gradient-to-br from-cyan-400/30 to-fuchsia-500/20 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                    <img
                      src={prod.imagen}
                      alt={prod.nombre}
                      className="object-contain h-full w-full"
                      onError={(e) => { e.currentTarget.src = '/images/principal.jpg'; }}
                    />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1 text-center">{prod.nombre}</h3>
                  <span className="text-accent font-semibold text-xl mb-1">{prod.precio.toLocaleString('es-CL')}</span>
                  <span className="text-white/70 text-sm mb-2">{prod.universidad}</span>
                  <button className="mt-auto px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 text-white font-bold shadow hover:scale-105 transition-all">Ver detalle</button>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 drop-shadow-lg">Intercambios entre Estudiantes</h1>
            <p className="text-lg text-white/70 mb-12 max-w-2xl">Encuentra productos y servicios disponibles para intercambio directo entre estudiantes. ¡Propón tu trueque!</p>
            <div className="rounded-3xl bg-white/10 border border-white/10 shadow-xl backdrop-blur-xl p-8 flex flex-col items-center justify-center min-h-[200px] text-white/60">
              <span>Próximamente: sistema de intercambios estudiantiles.</span>
            </div>
          </>
        )}
      </section>
      <Footer />
    </main>
  );
}
