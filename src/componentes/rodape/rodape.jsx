import { Link } from 'react-router-dom'

import { BsWhatsapp, BsArrowRight } from 'react-icons/bs'
import logo from '../../images/logo.png'

import style from './rodape.module.css'

export default function rodape() {
    return (
        <footer className={style.footer}>

            <p><img src={logo} alt="logo" className={style.logo} /></p>
            <span><BsWhatsapp /><Link to={'https://wa.me/5571983015757'}>(71)9 8103-5757</Link></span>
            <button type='button' onClick={() => window.location = '/Servicos'} className={style.btnAvancar}><BsArrowRight className={style.ArrowRight} /></button>
        </footer>
    )
}