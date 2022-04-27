import { Provider } from 'react-redux'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  )
}

export default MyApp
