import styles from './cartOption.module.css'
import Image from 'next/image'

export default function CartOption({image , title, price, onRemove}) {
    return (
        <div className={styles.options}>
            <Image className={styles.image} src={`/products/${image}`} alt={`Produto ${image}`} width={62} height={74}/>  
            <div className={styles.info}>
                <h2 className={styles.title}>{title}</h2>
                <h2 className={styles.price}>R${price.toFixed(2)}</h2>
                <p className={styles.remove} onClick={onRemove}>Remover</p>
            </div>  
        </div>
    )
}