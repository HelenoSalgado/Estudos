import '../styles/global.css';
import '../styles/body.css';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

export const metadata = {
  title: 'APIs',
  description: 'Consultas de APIs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>
      <Header title={metadata.title}/>
      {children}
      <Footer />
      </body>
    </html>
  )
}
