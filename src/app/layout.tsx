import '@/styles/globals.css'
import type { Metadata } from 'next'
import { SmoothScroll } from './providers'

export const metadata: Metadata = {
  title: 'Vikasya – Live Awake, Grow Steady',
  description: 'Conscious living powered by ancient wisdom.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  )
}
