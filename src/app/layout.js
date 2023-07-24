'use client'
import { Provider } from 'react-redux';
import store from '@/store/index';

import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import { Manrope } from 'next/font/google';
import React from 'react';

const manrope = Manrope({ subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {

  return (
    <React.StrictMode>
    <Provider store={store}>
      <html lang="en" className='h-full bg-[#F6F8F9]'>
        <body className={inter.className + ' h-full bg-[#F6F8F9] ' + ' ' + manrope.className}>
            <Header />
            
            {children}
        </body>
      </html>
    </Provider>
    </React.StrictMode>
  )
}
