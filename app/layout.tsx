import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mamzi Lash Lounge | Premium Lash Extensions in Kuruman',
  description: 'Professional lash extensions, lifts, and tints by Mamzimkhulu. Enhance your natural beauty with classic, volume, and hybrid lash sets in Kuruman, Northern Cape, South Africa.',
  keywords: 'lash extensions, eyelash extensions, lash lift, lash tint, Kuruman lashes, Mamzimkhulu, volume lashes, classic lashes, hybrid lashes',
  authors: [{ name: 'Mamzimkhulu' }],
  icons: {
    icon: '/images/mamzi-lash-lounge-logo.jpg',
    shortcut: '/images/mamzi-lash-lounge-logo.jpg',
    apple: '/images/mamzi-lash-lounge-logo.jpg',
  },
  openGraph: {
    title: 'Mamzi Lash Lounge',
    description: 'Premium lash extensions and beauty services in Kuruman',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
