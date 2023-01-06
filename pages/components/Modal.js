import styles from '../../styles/Modal.module.css'
import Modal from 'react-modal';
import { AiFillCloseCircle } from "react-icons/ai";
import { useState } from 'react';
import { data } from "../../data/listCities.js"

export default function SearchModal(props) {

    const [search, setSearch] = useState("")
    const [countySelect, setCountySelect] = useState({nome:"",  uf:""})
    const lowerSearch = search.toLowerCase()
    const filteredCounty = data.filter((county) => county.nome.toLowerCase().includes(lowerSearch) && county.nome != countySelect.nome)

    function closed() {
        setSearch("")
        props.setShowModal(false)
    }

    return (

        < Modal isOpen={props.showModal} className={styles.customStyles} >
            <AiFillCloseCircle
                className={styles.icon}
                onClick={closed}
            />
            <div className={styles.box}>
                <div>
                    <h3 className={styles.h3}>Escolha um município</h3>
                    <input className={styles.searchCounty}
                        type="text"
                        placeholder='Digite aqui'
                        value={search}
                        onChange={event => setSearch(event.target.value)}
                    />
                </div>
                <div className={styles.boxFIltereds}>
                    {
                        (countySelect.nome === "") ? null :

                            <div className={styles.selectedCounty} >
                                {countySelect.nome + ", " + countySelect.uf }
                            </div>
                    }
                    {
                        (search.length !== 0) ?

                            filteredCounty.map((county) => (
                                <div className={styles.filteredCounty}
                                    onClick={() => setCountySelect(county)}
                                    key={county}> {county.nome}, {county.uf}
                                </div>
                            ))
                            :
                            null
                    }
                </div>
            </div>


        </Modal >

    )
}
