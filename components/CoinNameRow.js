import React,{useContext} from 'react'
import { CoinMarketContext } from '../context/context'
import Image from 'next/image'
import btc from '../assets/btc.png'
import eth from '../assets/eth.png'
import usdc from '../assets/usdc.png'
import usdt from '../assets/usdt.png'
import xrp from '../assets/xrp.png'
import cardano from '../assets/cardano.png'
import doge from '../assets/doge.png'
import solana from '../assets/solana.png'
import avalanche from '../assets/avalanche.png'
import bnb from '../assets/bnb.png'


const styles = {
  CoinNameRow: `flex items-center`,
  buyButton: `bg-[#1A1F3A] text-[#6188FF] p-1 px-3 text-sm rounded-lg cursor-pointer hover:opacity-50`,
}

const CoinNameRow = ({name,icon, clicked}) => {


  const {openModal} = useContext(CoinMarketContext)

  const coinIcon = () => {
    switch(name) {
      case 'Bitcoin':
        return(
          <Image 
            src={btc}
            className='rounded-full'
            width={20}
            height={20}
          />
        )
        case 'Ethereum':
                return (
                  <Image
                    src={eth}
                    className='rounded-full'
                    width={20}
                    height={20}
                    alt=''
                  />
                )
        
              case 'Tether':
                return (
                  <Image
                    src={usdt}
                    className='rounded-full'
                    width={20}
                    height={20}
                    alt=''
                  />
                )
        
              case 'BNB':
                return (
                  <Image
                    src={bnb}
                    className='rounded-full'
                    width={20}
                    height={20}
                    alt=''
                  />
                )
        
              case 'USD Coin':
                return (
                  <Image
                    src={usdc}
                    className='rounded-full'
                    width={20}
                    height={20}
                    alt=''
                  />
                )
        
              case 'XRP':
                return (
                  <Image
                    src={xrp}
                    className='rounded-full'
                    width={20}
                    height={20}
                    alt=''
                  />
                )
        
              case 'Cardano':
                return (
                  <Image
                    src={cardano}
                    className='rounded-full'
                    width={20}
                    height={20}
                    alt=''
                  />
                )
        
              case 'DogeCoin':
                return (
                  <Image
                    src={doge}
                    className='rounded-full'
                    width={20}
                    height={20}
                    alt=''
                  />
                )
        
              case 'Solana':
                return (
                  <Image
                    src={solana}
                    className='rounded-full'
                    width={20}
                    height={20}
                    alt=''
                  />
                )
        
              case 'Avalanche':
                return (
                  <Image
                    src={avalanche}
                    className='rounded-full'
                    width={20}
                    height={20}
                    alt=''
                  />
                )
    }
  }

  return (
   <div className={styles.CoinNameRow}>
     <div className='mr-3 flex' onClick={clicked}>
       <div className='mr-2'>{coinIcon()}</div>
       {name}
     </div>
     <p>
       {name === 'Bitcoin' || name === 'Ethereum' || name === 'Tether' ? (
          <span className={styles.buyButton} onClick={() => openModal()}>
            BUY
         </span>
       ):(
         <></>
       )}
     </p>
   </div>
  )
}

export default CoinNameRow
