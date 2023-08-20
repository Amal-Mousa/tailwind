import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { NavBar } from './components'

const poppins = Poppins({ subsets: ['latin'], weight: ['400'] })

export const metadata: Metadata = {
  title: 'Learn Next',
  description: 'Generated by create next app',
}

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NavBar/>
        {children}
        </body>
    </html>
  )
}

export default RootLayout;