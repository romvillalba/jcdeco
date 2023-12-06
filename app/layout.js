import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/navBar'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jdeco',
  description: 'Velas',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">

      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer/>
      </body>
    </html>
  )
}
