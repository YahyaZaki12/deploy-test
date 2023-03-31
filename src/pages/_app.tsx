import { Theme } from '@/styles/global-theme'
import '@/styles/globals.css'
import "@/styles/HeroSection.scss"
import { ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <ThemeProvider theme={Theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
}
