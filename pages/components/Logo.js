import Image from 'next/image'
import Modal1 from '../../public/images/logo.svg'
import Modal2 from '../../public/images/logoo.svg'
import styles from '../../styles/Logo.module.css'


export default function Logo(props) {
    
    return (
        <logo className={styles.logo} onClick={() => props.setShowModal(true)}>
            <Image src={Modal1} alt="" />
            <Image src={Modal2} alt="" />
            <Image src={Modal2} alt="" />
        </logo>
    )
}