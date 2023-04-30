import '@/styles/globals.css'
import '@/styles/menubar.css';
import '@/styles/topanime.css'
import '@/styles/main.css';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />

      <script>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"></link>
      </script>
    </>
    
  )
}
