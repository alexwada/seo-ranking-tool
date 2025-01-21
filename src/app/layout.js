import { Inter, Montserrat } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'SEO Ranking Tool',
  description: 'Check your local SEO rankings',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}