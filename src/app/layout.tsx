import './globals.css'
import type { Metadata } from 'next'
import { Bebas_Neue, Poppins } from 'next/font/google'

const bebas = Bebas_Neue({ weight: ['400'], subsets: ['latin'] });
const poppins = Poppins({ weight: ['300', '400', '500', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Intervals',
  description: 'Otimize o seu treino intervalado!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  )
}
