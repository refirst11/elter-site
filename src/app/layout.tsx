import 'styles/global'
import 'syntax/_syntax.css'
import { Header } from 'components/Header'
import { Menu } from 'components/Menu'
import { Footer } from 'components/Footer'
import { ThemeProvider } from 'next-themes'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { PreviewServerCSS } from 'typedcssx/server'

const inter = Inter({ subsets: ['latin'], variable: '--Inter' })
export const fetchCache = 'force-cache'
export const dynamicParams = false

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <PreviewServerCSS anchorEnabled={true} />
      </head>
      <body className={inter.variable}>
        <ThemeProvider enableSystem={true} defaultTheme="system">
          <Header />
          <Menu />
          {children}
          <Analytics />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
