import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
  <SessionProvider session={session}>

  <Navbar/>
  <Component {...pageProps} />
  
  </SessionProvider>
  )}

export default MyApp
