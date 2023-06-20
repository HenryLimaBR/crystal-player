import '../styles/globals.scss'
import { Noto_Sans as Noto } from 'next/font/google'

const noto = Noto({
  subsets: ['latin'],
  weight: ['100', '200', '300', '600', '700', '800', '900'],
  variable: '--noto-sans'
})

export const metadata = {
  title: 'Crystal Player for Twitch',
  description: 'Your favorite streamer listening to your favorite music!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={noto.className}>{children}</body>
    </html>
  )
}
