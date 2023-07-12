import styles from './gameCard.module.css'
import Image from 'next/image'
import Button from '@/components/forms/button/button'

export default function GameCard() {
    return (
        <div className={styles.gamecard}>
            <Image className={styles.image} src='/products/valorant.jpg' height={145} width={300} />
            <div className={styles.info}>
                <h3 className={styles.title}>Counter Strike Global Offensive</h3>
                <p className={styles.category}>Ação , Estratégia</p>
                <div className={styles.pricing}>
                    <h2 className={styles.price}>
                        R$99,00
                    </h2>
                    <Button>Adicionar Ao Carrinho</Button>
                </div>
            </div>
        </div>
    )
}