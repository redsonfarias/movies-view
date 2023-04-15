import { ReactNode } from 'react'
import './global.css'
import { Barlow } from 'next/font/google'

export const metadata = {
  title: 'Filmes',
  description: 'Generated by create next app',
}

const barlow = Barlow({
  subsets: ['latin'],
  variable: '--font-barlow',
  weight: ['400', '500', '600'],
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${barlow.variable} font-sans`}>
        <div className="flex justify-center py-4 px-12">
          <p className="text-white text-2xl font-medium tracking-wide">
            Filmes
          </p>
        </div>
        {children}
      </body>
    </html>
  )
}
