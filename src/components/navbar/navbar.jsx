import Logo from '../logo/logo'
import styles from './navbar.module.css'
import Input from '../forms/input/input'
import CartButton from '../forms/cartButton/cartButton'

export default function Navbar({ cart , onRemove}) {
    return (
        <nav className={styles.nav}>
            <Logo />
            <div className={styles.search}>
                <Input type="text" placeholder="Buscar"/>
            </div>
            <CartButton
                cart={cart}
                onRemove={onRemove}
            />
        </nav>
    )
}