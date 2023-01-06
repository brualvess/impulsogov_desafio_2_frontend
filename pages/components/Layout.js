import Navbar from "./Navbar"
import Footer from "./Footer"
import Head from "next/head"
import Modal from "../components/Modal.js"
import { useState } from 'react';

export default function Layout({children}){
    const [showModal, setShowModal] = useState(false)
    return(
        <>
        <Head><title>impulsoGov</title></Head>
        <Navbar setShowModal={setShowModal} showModal={showModal}/>
        <Modal showModal={showModal} setShowModal={setShowModal}/>
        <main>{children}</main>
        <Footer/> 
        </>
    )
}