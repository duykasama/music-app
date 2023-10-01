import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {Nav} from "@/components/nav/Nav";
import StateProvider from "@/redux/StateProvider";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <StateProvider>
      <body className={inter.className}>
          <div className="w-screen h-screen grid grid-cols-12 p-2 gap-2">
              <section className="col-span-2">
                <Nav />
              </section>
              <main className="col-span-10 bg-neutral-800 rounded-md grid grid-rows-6 overflow-auto p-2">
                {children}
              </main>
          </div>
      </body>
    </StateProvider>
    </html>
  )
}
