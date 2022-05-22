import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MoralisProvider } from 'react-moralis'


function MyApp({ Component, pageProps }: AppProps) {
 
  return (
      <MoralisProvider
        serverUrl='https://m0xauu4gf784.usemoralis.com:2053/server'
        appId='1WiMV3g63cqG3wEMJkLtaUDq0ku4CiZ7ExuCHkl4'
      >
        <Component {...pageProps} />
      </MoralisProvider>
  )
}

export default MyApp
