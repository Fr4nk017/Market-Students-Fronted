import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Market Students | Marketplace de estudiantes',
  description: 'Compra y vende de forma segura entre estudiantes. El mercado más confiable para estudiantes.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
