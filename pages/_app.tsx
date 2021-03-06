import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MoralisProvider } from 'react-moralis'
import { CoinMarketProvider } from '../context/context'
import { GunProvider } from '../context/gunContext'


function MyApp({ Component, pageProps }: AppProps) {
 
  return (
      <MoralisProvider
        serverUrl='https://m0xauu4gf784.usemoralis.com:2053/server'
        appId='1WiMV3g63cqG3wEMJkLtaUDq0ku4CiZ7ExuCHkl4'
        ><GunProvider>
            <CoinMarketProvider>
              <Component {...pageProps} />
            </CoinMarketProvider>
          </GunProvider>
      </MoralisProvider>
  )
}

export default MyApp
