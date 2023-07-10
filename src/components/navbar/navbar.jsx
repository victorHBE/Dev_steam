import Logo from '../logo/logo'
import styles from './navbar.module.css'
import { BsCart4 } from 'react-icons/bs'

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <Logo />
            <input/>
            <BsCart4 size={40}/>
        </nav>
    )
}