import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import SearchBox from '@/components/SearchBox'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hospetapp',
  description: 'Test App',
  favicon: 'favicon.svg'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Navbar />
        <SearchBox />
        {children}
      </body>
    </html>
  )
}
