import Head from 'next/head'

import styles from '@/styles/index.module.css'

//componentes
import Navbar from '@/components/navbar/navbar'
import Subtitle from '@/components/tipography/subtitle/subtitle'
import Container from '@/components/container/container'
import SaleCard from '@/components/cards/saleCard/saleCard'

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
        <Navbar/>

        <Container>
            <div className={styles.session}>
              <Subtitle> Promoção </Subtitle>
              <div className={styles.saleconteiner}>
                <SaleCard />
                <SaleCard />
                <SaleCard />
              </div>
              
            </div>
            <div>
              <Subtitle className={styles.session}> Outros jogos </Subtitle>
            </div>
            
        </Container>

      </div>
      
    </>
  )
}
