import Logo from '../logo/logo'
import styles from './navbar.module.css'
import { BsCart4 } from 'react-icons/bs'
import Input from '../forms/input/input'
import CartButton from '../forms/cartButton/cartButton'

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <Logo />
            <div className={styles.search}>
                <Input type="text" placeholder="Buscar"/>
            </div>
            <CartButton />
        </nav>
    )
}