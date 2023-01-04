import styles from '../../styles/Navbar.module.css'
import Logo from './Logo'
export default function Navbar() {
    return (
        <nav className={styles.navbar}>
           <Logo/>
            <div className={styles.home}>HOME</div>
        </nav>

    )
} 