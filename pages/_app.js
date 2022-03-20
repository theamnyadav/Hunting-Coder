import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'



function MyApp({ Component, pageProps }) {
  return <>
  <Navbar/>
  <Component {...pageProps} />
  </>
}

export default MyApp
