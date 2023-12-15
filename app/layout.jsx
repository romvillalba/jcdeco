import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/navBar'
import Footer from '@/components/footer'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import  CartProvider  from '@/components/providers/cart-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'JCdeco',
  description: 'Velas',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>

      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CartProvider>
          <NavBar />
          {children}
          <Footer />
          <Toaster />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
