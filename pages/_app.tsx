
import type { AppProps } from 'next/app';
import Footer from '@/src/components/Footer/Footer'
import Navbar from '@/src/components/Header/Navbar'
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
  <Navbar/>
  <Component {...pageProps} />
  <Footer/>
   
      
    </>
  )
}
