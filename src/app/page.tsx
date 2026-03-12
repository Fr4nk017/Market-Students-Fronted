import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0B0C] font-sans">
      <Navbar />
      {/* Barra de búsqueda avanzada */}
      <section className="max-w-4xl mx-auto px-4 -mb-8 z-20 relative">
        <form className="flex flex-col md:flex-row items-center gap-4 bg-white/10 border border-white/10 rounded-full shadow-xl backdrop-blur-xl px-6 py-4 mt-8 animate-fade-in-up transition-all duration-500 hover:shadow-2xl group">
          <input
            type="text"
            placeholder="¿Qué buscas hoy? (ej. laptop, tutoría, libro...)"
            className="flex-1 bg-transparent outline-none text-white placeholder-white/60 font-medium text-lg px-2 py-2 transition-all focus:placeholder-white/80"
          />
          <select className="bg-white/10 border border-white/20 rounded-full px-4 py-2 text-white/80 font-medium focus:ring-2 focus:ring-accent transition-all">
            <option value="">Categoría</option>
            <option value="tecnologia">Tecnología</option>
            <option value="libros">Libros</option>
            <option value="servicios">Servicios</option>
            <option value="otros">Otros</option>
          </select>
          <select className="bg-white/10 border border-white/20 rounded-full px-4 py-2 text-white/80 font-medium focus:ring-2 focus:ring-accent transition-all">
            <option value="">Precio</option>
            <option value="menor">Menor a mayor</option>
            <option value="mayor">Mayor a menor</option>
          </select>
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 text-white font-bold shadow-lg hover:scale-105 hover:shadow-accent/40 transition-all duration-200 focus:ring-2 focus:ring-accent group-hover:scale-110"
          >
            <span className="lowercase">buscar</span>
            <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
          </button>
        </form>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2">
        {/* Tarjeta principal */}
        <div className="relative rounded-3xl bg-white/10 border border-white/10 shadow-2xl backdrop-blur-xl flex flex-col justify-end overflow-hidden group h-[420px] md:h-[480px]">
          <div className="absolute inset-0 z-0">
            <div className="absolute -top-10 -left-10 w-60 h-60 bg-gradient-to-tr from-cyan-400 via-blue-600 to-fuchsia-500 opacity-30 rounded-full blur-2xl animate-pulse" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-br from-orange-400 via-pink-500 to-violet-600 opacity-40 rounded-full blur-2xl animate-pulse" />
          </div>
          <img src="/images/principal.jpg" alt="Mercado Estudiantil" className="relative z-10 w-full h-48 object-cover rounded-2xl mt-6 shadow-lg border border-white/20" />
          <div className="relative z-10 p-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg">Mercado Estudiantil</h1>
            <p className="text-lg text-white/70 font-medium mb-4">Compra, vende e intercambia productos y servicios en una plataforma segura y moderna para estudiantes.</p>
            <div className="flex gap-4 mt-4">
              <Link href="/mercado" className="px-6 py-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 text-white font-bold shadow-lg hover:scale-105 transition-all flex items-center">
                Explorar productos <span className="ml-1">→</span>
              </Link>
              <button className="px-6 py-2 rounded-full bg-gradient-to-r from-orange-400 via-pink-500 to-violet-600 text-white font-bold shadow-lg hover:scale-105 transition-all">Publicar anuncio <span className="ml-1">→</span></button>
            </div>
          </div>
          <span className="absolute top-4 right-6 text-xs tracking-widest text-white/60 font-semibold uppercase">PLATAFORMA</span>
        </div>

        {/* Tarjetas secundarias en columna */}
        <div className="flex flex-col gap-8 h-[420px] md:h-[480px]">
          {/* Tarjeta secundaria 1 */}
          <div className="relative flex-1 rounded-3xl bg-white/10 border border-white/10 shadow-xl backdrop-blur-xl flex flex-col justify-between p-6 overflow-hidden min-h-[120px]">
            <span className="absolute top-4 right-6 text-xs tracking-widest text-white/60 font-semibold uppercase">DAPP</span>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-inner">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="url(#paint0_radial)" /><defs><radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientTransform="translate(12 12) scale(10)" gradientUnits="userSpaceOnUse"><stop stopColor="#fff"/><stop offset="1" stopColor="#38bdf8"/></radialGradient></defs></svg>
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Intercambios rápidos</h2>
                <p className="text-white/70 text-sm">Transacciones seguras y sin fricción entre estudiantes.</p>
              </div>
            </div>
          </div>
          {/* Tarjeta secundaria 2 */}
          <div className="relative flex-1 rounded-3xl bg-white/10 border border-white/10 shadow-xl backdrop-blur-xl flex flex-col justify-between p-6 overflow-hidden min-h-[120px]">
            <span className="absolute top-4 right-6 text-xs tracking-widest text-white/60 font-semibold uppercase">WALLET</span>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-fuchsia-500 to-orange-400 flex items-center justify-center shadow-inner">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="8" fill="url(#paint1_radial)" /><defs><radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientTransform="translate(12 12) scale(8)" gradientUnits="userSpaceOnUse"><stop stopColor="#fff"/><stop offset="1" stopColor="#f472b6"/></radialGradient></defs></svg>
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Wallet estudiantil</h2>
                <p className="text-white/70 text-sm">Gestiona tus fondos y pagos de forma digital y segura.</p>
              </div>
            </div>
          </div>
          {/* Tarjeta secundaria 3 */}
          <div className="relative flex-1 rounded-3xl bg-white/10 border border-white/10 shadow-xl backdrop-blur-xl flex flex-col justify-between p-6 overflow-hidden min-h-[120px]">
            <span className="absolute top-4 right-6 text-xs tracking-widest text-white/60 font-semibold uppercase">OFERTAS</span>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-inner">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><polygon points="12,2 22,22 2,22" fill="url(#paint2_radial)" /><defs><radialGradient id="paint2_radial" cx="0" cy="0" r="1" gradientTransform="translate(12 12) scale(10)" gradientUnits="userSpaceOnUse"><stop stopColor="#fff"/><stop offset="1" stopColor="#38bdf8"/></radialGradient></defs></svg>
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Ofertas exclusivas</h2>
                <p className="text-white/70 text-sm">Aprovecha promociones y descuentos solo para estudiantes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Carrusel de Ofertas Destacadas */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-white mb-8">Ofertas destacadas</h2>
        <div className="relative overflow-x-auto flex gap-8 pb-4 hide-scrollbar">
          {/* Oferta 1 */}
          <div className="min-w-[320px] rounded-3xl bg-white/10 border border-white/10 shadow-xl backdrop-blur-xl p-6 flex flex-col justify-between hover:scale-105 transition-all cursor-pointer group">
            <span className="text-xs tracking-widest text-white/60 font-semibold uppercase mb-2">Tecnología</span>
            <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80" alt="Laptop" className="rounded-xl mb-4 h-32 object-cover shadow-lg border border-white/20 group-hover:shadow-accent/40 transition-all" />
            <h3 className="text-xl font-bold text-white mb-2">Laptop HP Pavilion</h3>
            <p className="text-white/70 mb-4">Perfecta para clases y proyectos. ¡Descuento especial para estudiantes!</p>
            <span className="text-accent font-semibold mt-auto">Ver oferta →</span>
          </div>
          {/* Oferta 2 */}
          <div className="min-w-[320px] rounded-3xl bg-white/10 border border-white/10 shadow-xl backdrop-blur-xl p-6 flex flex-col justify-between hover:scale-105 transition-all cursor-pointer group">
            <span className="text-xs tracking-widest text-white/60 font-semibold uppercase mb-2">Libros</span>
            <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80" alt="Libros" className="rounded-xl mb-4 h-32 object-cover shadow-lg border border-white/20 group-hover:shadow-accent/40 transition-all" />
            <h3 className="text-xl font-bold text-white mb-2">Pack de libros universitarios</h3>
            <p className="text-white/70 mb-4">Lote de libros de ingeniería y ciencias a precio especial.</p>
            <span className="text-accent font-semibold mt-auto">Ver oferta →</span>
          </div>
          {/* Oferta 3 */}
          <div className="min-w-[320px] rounded-3xl bg-white/10 border border-white/10 shadow-xl backdrop-blur-xl p-6 flex flex-col justify-between hover:scale-105 transition-all cursor-pointer group">
            <span className="text-xs tracking-widest text-white/60 font-semibold uppercase mb-2">Servicios</span>
            <img src="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80" alt="Tutoría" className="rounded-xl mb-4 h-32 object-cover shadow-lg border border-white/20 group-hover:shadow-accent/40 transition-all" />
            <h3 className="text-xl font-bold text-white mb-2">Tutoría de matemáticas</h3>
            <p className="text-white/70 mb-4">Clases personalizadas para exámenes y tareas. ¡Reserva tu cupo!</p>
            <span className="text-accent font-semibold mt-auto">Ver oferta →</span>
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-white mb-8">Categorías populares</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {/* Libros */}
          <div className="group rounded-2xl bg-white/10 border border-white/10 shadow-lg backdrop-blur-xl flex flex-col items-center justify-center p-6 transition-all hover:scale-105 hover:shadow-accent/40 cursor-pointer">
            <div className="w-14 h-14 mb-2 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-inner animate-bounce-slow">
              <span className="text-2xl">📚</span>
            </div>
            <span className="text-white font-semibold">Libros</span>
          </div>
          {/* Tecnología */}
          <div className="group rounded-2xl bg-white/10 border border-white/10 shadow-lg backdrop-blur-xl flex flex-col items-center justify-center p-6 transition-all hover:scale-105 hover:shadow-accent/40 cursor-pointer">
            <div className="w-14 h-14 mb-2 rounded-full bg-gradient-to-br from-fuchsia-500 to-orange-400 flex items-center justify-center shadow-inner animate-bounce-slow">
              <span className="text-2xl">💻</span>
            </div>
            <span className="text-white font-semibold">Tecnología</span>
          </div>
          {/* Servicios */}
          <div className="group rounded-2xl bg-white/10 border border-white/10 shadow-lg backdrop-blur-xl flex flex-col items-center justify-center p-6 transition-all hover:scale-105 hover:shadow-accent/40 cursor-pointer">
            <div className="w-14 h-14 mb-2 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-inner animate-bounce-slow">
              <span className="text-2xl">🛠️</span>
            </div>
            <span className="text-white font-semibold">Servicios</span>
          </div>
          {/* Ropa */}
          <div className="group rounded-2xl bg-white/10 border border-white/10 shadow-lg backdrop-blur-xl flex flex-col items-center justify-center p-6 transition-all hover:scale-105 hover:shadow-accent/40 cursor-pointer">
            <div className="w-14 h-14 mb-2 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center shadow-inner animate-bounce-slow">
              <span className="text-2xl">👕</span>
            </div>
            <span className="text-white font-semibold">Ropa</span>
          </div>
          {/* Otros */}
          <div className="group rounded-2xl bg-white/10 border border-white/10 shadow-lg backdrop-blur-xl flex flex-col items-center justify-center p-6 transition-all hover:scale-105 hover:shadow-accent/40 cursor-pointer">
            <div className="w-14 h-14 mb-2 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center shadow-inner animate-bounce-slow">
              <span className="text-2xl">✨</span>
            </div>
            <span className="text-white font-semibold">Otros</span>
          </div>
        </div>
      </section>

      {/* Partners/Universidades de Chile */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-white mb-8">Institutos y Universidades de Chile</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="rounded-2xl bg-white/10 border border-white/10 shadow-lg backdrop-blur-xl flex flex-col items-center justify-center p-6">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Logo_Duoc_UC.png" alt="Duoc UC" className="h-12 mb-2 grayscale hover:grayscale-0 transition-all duration-300" />
            <span className="text-white/80 font-semibold">Duoc UC</span>
          </div>
          <div className="rounded-2xl bg-white/10 border border-white/10 shadow-lg backdrop-blur-xl flex flex-col items-center justify-center p-6">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Escudo_de_la_Universidad_de_Chile.svg" alt="U. de Chile" className="h-12 mb-2 grayscale hover:grayscale-0 transition-all duration-300" />
            <span className="text-white/80 font-semibold">U. de Chile</span>
          </div>
          <div className="rounded-2xl bg-white/10 border border-white/10 shadow-lg backdrop-blur-xl flex flex-col items-center justify-center p-6">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Pontificia_Universidad_Catolica_de_Chile_Logo.svg" alt="PUC" className="h-12 mb-2 grayscale hover:grayscale-0 transition-all duration-300" />
            <span className="text-white/80 font-semibold">PUC</span>
          </div>
          <div className="rounded-2xl bg-white/10 border border-white/10 shadow-lg backdrop-blur-xl flex flex-col items-center justify-center p-6">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Escudo_UTFSM.png" alt="UTFSM" className="h-12 mb-2 grayscale hover:grayscale-0 transition-all duration-300" />
            <span className="text-white/80 font-semibold">UTFSM</span>
          </div>
        </div>
      </section>

      {/* Animaciones de fondo (glows y partículas) */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute left-1/3 top-0 w-96 h-96 bg-gradient-to-br from-cyan-400 via-blue-600 to-fuchsia-500 opacity-10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute right-0 bottom-0 w-80 h-80 bg-gradient-to-br from-orange-400 via-pink-500 to-violet-600 opacity-10 rounded-full blur-2xl animate-pulse" />
        {/* Partículas animadas */}
        <div className="absolute left-1/2 top-1/2 w-2 h-2 bg-accent rounded-full animate-ping" style={{animationDelay: '0.5s'}} />
        <div className="absolute left-1/4 top-1/3 w-1.5 h-1.5 bg-fuchsia-500 rounded-full animate-ping" style={{animationDelay: '1s'}} />
        <div className="absolute right-1/4 bottom-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping" style={{animationDelay: '1.5s'}} />
      </div>

      {/* Blog/Noticias */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-white mb-8">Noticias y tips para estudiantes</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="rounded-3xl bg-white/10 border border-white/10 shadow-xl backdrop-blur-xl p-6 flex flex-col justify-between hover:scale-105 transition-all cursor-pointer">
            <span className="text-xs tracking-widest text-white/60 font-semibold uppercase mb-2">Tips</span>
            <h3 className="text-xl font-bold text-white mb-2">Cómo vender de forma segura en línea</h3>
            <p className="text-white/70 mb-4">Aprende las mejores prácticas para proteger tus datos y concretar ventas exitosas en el campus.</p>
            <span className="text-accent font-semibold mt-auto">Leer más →</span>
          </div>
          <div className="rounded-3xl bg-white/10 border border-white/10 shadow-xl backdrop-blur-xl p-6 flex flex-col justify-between hover:scale-105 transition-all cursor-pointer">
            <span className="text-xs tracking-widest text-white/60 font-semibold uppercase mb-2">Noticias</span>
            <h3 className="text-xl font-bold text-white mb-2">Nueva alianza con universidades</h3>
            <p className="text-white/70 mb-4">¡Ahora puedes acceder a beneficios exclusivos gracias a nuestros convenios con instituciones educativas!</p>
            <span className="text-accent font-semibold mt-auto">Leer más →</span>
          </div>
          <div className="rounded-3xl bg-white/10 border border-white/10 shadow-xl backdrop-blur-xl p-6 flex flex-col justify-between hover:scale-105 transition-all cursor-pointer">
            <span className="text-xs tracking-widest text-white/60 font-semibold uppercase mb-2">Blog</span>
            <h3 className="text-xl font-bold text-white mb-2">Top 5 productos más vendidos</h3>
            <p className="text-white/70 mb-4">Descubre qué buscan y compran más los estudiantes este semestre en Mercado Estudiantil.</p>
            <span className="text-accent font-semibold mt-auto">Leer más →</span>
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-1 md:col-span-3 mb-4">
          <h2 className="text-3xl font-bold text-white mb-2">Testimonios</h2>
          <p className="text-white/70 text-lg">Lo que dicen los estudiantes sobre Mercado Estudiantil</p>
        </div>
        {/* Testimonio 1 */}
        <div className="relative rounded-3xl bg-white/10 border border-white/10 shadow-xl backdrop-blur-xl p-8 flex flex-col items-center text-center overflow-hidden">
          <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-tr from-cyan-400 via-blue-600 to-fuchsia-500 opacity-20 rounded-full blur-2xl" />
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Estudiante 1" className="w-20 h-20 rounded-full border-4 border-white/30 shadow-lg mb-4 object-cover" />
          <p className="text-white/80 text-lg mb-2">“¡La mejor plataforma para vender mis libros y gadgets! El diseño es increíble y todo es muy seguro.”</p>
          <span className="text-white/60 text-sm font-semibold uppercase tracking-widest">Carlos, UNAM</span>
        </div>
        {/* Testimonio 2 */}
        <div className="relative rounded-3xl bg-white/10 border border-white/10 shadow-xl backdrop-blur-xl p-8 flex flex-col items-center text-center overflow-hidden">
          <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-tr from-orange-400 via-pink-500 to-violet-600 opacity-20 rounded-full blur-2xl" />
          <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Estudiante 2" className="w-20 h-20 rounded-full border-4 border-white/30 shadow-lg mb-4 object-cover" />
          <p className="text-white/80 text-lg mb-2">“Encontré ofertas únicas y pude intercambiar servicios fácilmente. ¡Recomendado para toda la comunidad estudiantil!”</p>
          <span className="text-white/60 text-sm font-semibold uppercase tracking-widest">María, IPN</span>
        </div>
        {/* Testimonio 3 */}
        <div className="relative rounded-3xl bg-white/10 border border-white/10 shadow-xl backdrop-blur-xl p-8 flex flex-col items-center text-center overflow-hidden">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-gradient-to-tr from-blue-400 via-cyan-500 to-fuchsia-500 opacity-20 rounded-full blur-2xl" />
          <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="Estudiante 3" className="w-20 h-20 rounded-full border-4 border-white/30 shadow-lg mb-4 object-cover" />
          <p className="text-white/80 text-lg mb-2">“La wallet integrada y las micro-interacciones hacen que la experiencia sea futurista y divertida.”</p>
          <span className="text-white/60 text-sm font-semibold uppercase tracking-widest">Luis, UAM</span>
        </div>
      </section>
      <Footer />
    </main>
  );
}
