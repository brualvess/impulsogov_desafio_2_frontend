import styles from '../../styles/Navbar.module.css'
import Logo from './Logo'
export default function Navbar(props) {
    return (
        <nav className={styles.navbar}>
           <Logo setShowModal={props.setShowModal} showModal={props.showModal}/>
            <div className={styles.home}>HOME</div>
        </nav>

    )
} 