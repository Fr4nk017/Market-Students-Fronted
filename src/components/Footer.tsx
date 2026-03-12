import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-text py-16 border-t border-muted">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Sobre nosotros */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-accent">Sobre Market Students</h4>
            <ul className="space-y-2 text-muted">
              <li><Link href="#" className="hover:text-white transition">Acerca de</Link></li>
              <li><Link href="#" className="hover:text-white transition">Carrera</Link></li>
              <li><Link href="#" className="hover:text-white transition">Blog</Link></li>
              <li><Link href="#" className="hover:text-white transition">Prensa</Link></li>
            </ul>
          </div>

          {/* Comunidad */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-accent">Comunidad</h4>
            <ul className="space-y-2 text-muted">
              <li><Link href="#" className="hover:text-white transition">Foro</Link></li>
              <li><Link href="#" className="hover:text-white transition">Guías</Link></li>
              <li><Link href="#" className="hover:text-white transition">Historias de éxito</Link></li>
              <li><Link href="#" className="hover:text-white transition">Eventos</Link></li>
            </ul>
          </div>

          {/* Soporte */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-accent">Soporte</h4>
            <ul className="space-y-2 text-muted">
              <li><Link href="#" className="hover:text-white transition">Ayuda</Link></li>
              <li><Link href="#" className="hover:text-white transition">Contacto</Link></li>
              <li><Link href="#" className="hover:text-white transition">Reportar</Link></li>
              <li><Link href="#" className="hover:text-white transition">Seguridad</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-accent">Legal</h4>
            <ul className="space-y-2 text-muted">
              <li><Link href="#" className="hover:text-white transition">Términos</Link></li>
              <li><Link href="#" className="hover:text-white transition">Privacidad</Link></li>
              <li><Link href="#" className="hover:text-white transition">Cookies</Link></li>
              <li><Link href="#" className="hover:text-white transition">Política</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-muted pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted">
              © 2024 Market Students. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-muted hover:text-accent transition">Facebook</a>
              <a href="#" className="text-muted hover:text-accent transition">Twitter</a>
              <a href="#" className="text-muted hover:text-accent transition">Instagram</a>
              <a href="#" className="text-muted hover:text-accent transition">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
