import { Link } from 'react-router-dom'
import style from './header.module.css'

export default function Header({ titulo }) {
    return (
        <header className={style.header}>

            <h2>{titulo}</h2>

            <nav className={style.navBar}>
                <ul>
                    <li>< Link to={'/'} >Inicio</Link ></li>
                </ul>
            </nav>
        </header>
    )
}