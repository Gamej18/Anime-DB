import '@/styles/globals.css'
import '@/styles/menubar.css';
import '@/styles/toppickbar.css';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
