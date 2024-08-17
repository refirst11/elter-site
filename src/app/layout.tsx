import { Header } from 'components/Header'
import { Menu } from 'components/Menu'
import { Footer } from 'components/Footer'
import { ThemeProvider } from 'next-themes'
import '../../node_modules/typedcssx/dist/core/styles/global.css'
import 'syntax/_syntax.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--Inter' })
export const fetchCache = 'force-cache'
export const dynamicParams = false

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        <ThemeProvider>
          <Header />
          <Menu />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
