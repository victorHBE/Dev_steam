import Head from 'next/head'

import styles from '@/styles/index.module.css'
import Image from 'next/image'

//componentes
import Navbar from '@/components/navbar/navbar'
import Subtitle from '@/components/tipography/subtitle/subtitle'
import Container from '@/components/container/container'
import SaleCard from '@/components/cards/saleCard/saleCard'
import GameCard from '@/components/cards/gameCard/gameCard'

export default function Home() {
  return (
    <>
      <Head>
        <title>DevSteam: A sua loja online de games</title>
        <meta name="description" content="DevSteam: A sua loja online de games" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />

        <Container>
            <div className={styles.session}>
              <Subtitle> Promoção </Subtitle>
              <div className={styles.saleconteiner}>
                <SaleCard
                  image={'league-of-legends.jpg'}
                  title='League of Legends'
                  discount={'20%'}
                  fullprice={'R$39,90'}
                  discountprice={'R$24,75'}
                />
                <SaleCard
                  image={'counter-strike.jpg'}
                  title='Counter Strike'
                  discount={'30%'}
                  fullprice={'R$50,90'}
                  discountprice={'R$35,75'}
                />
                <SaleCard
                  image={'dota-2.jpg'}
                  title='Dota 2'
                  discount={'50%'}
                  fullprice={'R$100,90'}
                  discountprice={'R$50,75'}
                />
              </div>
              
            </div>
            <div className={styles.session}>
              <Subtitle> Outros jogos </Subtitle>
              <div className={styles.gameconteiner}>
                <GameCard />
                <GameCard />
                <GameCard />
                <GameCard />
              </div>
            </div>
            
        </Container>

      </div>
      
    </>
  )
}

SaleCard.defaultProps = {
  image: 'valorant.jgp',
  title: 'Valorant',
  discount:'30%',
  fullprice:'R$50,90',
  discountprice: 'R$35,75'
}
