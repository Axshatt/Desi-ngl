import '../styles/globals.css'
import { Toaster } from 'react-hot-toast'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Desi-Ngl | Anonymous Messages</title>
      </Head>
      <Toaster position="top-center" reverseOrder={false} />
      <Component {...pageProps} />
    </>
  )
}

