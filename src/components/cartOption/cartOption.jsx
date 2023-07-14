import styles from './cartOption.module.css'
import Image from 'next/image'

export default function CartOption() {
    return (
        <div className={styles.options}>
            <Image src={'/public/products/valorant.jpg'} width={62} height={74}/>  
            <div className={styles.info}>
                <h2 className={styles.title}>titulo</h2>
                <h2 className={styles.price}>R$99</h2>
                <p className={styles.remove}>Remover</p>
            </div>  
        </div>
    )
}