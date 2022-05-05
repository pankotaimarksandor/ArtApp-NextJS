import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import {store} from '../redux/store'
import '../styles/globals.css'
import Header from "../components/header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Provider store={store}>
          <Header/>
          <Component {...pageProps} />
      </Provider>
  )
}

export default MyApp
