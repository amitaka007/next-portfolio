'use client';
import './globals.css'
import { Poppins } from '@next/font/google'
import { Analytics } from '@vercel/analytics/react';
// import { ThemeProvider } from 'next-themes';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      {/* <ThemeProvider attribute='class' defaultTheme='light' > */}
        <body className={`${poppins.className} font-poppins bg-gray-100/50 dark:bg-grey-900 text-black dark:text-white overflow-x-hidden`}>
          {/* <body if (process.env.NODE_ENV === 'production') {className='bg-gray-100/50 dark:bg-grey-900 text-black dark:text-white overflow-x-hidden'> */}
          {children}
          <Analytics />
        </body>
      {/* </ThemeProvider> */}
    </html>
  )
}
