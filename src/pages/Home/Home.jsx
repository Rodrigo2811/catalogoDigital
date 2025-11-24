import Rodape from '../../componentes/rodape/rodape'
import style from './home.module.css'
export default function Home() {
    return (
        <>
            <div className={style.container}>
                <p className={style.paragrafo1}>Catálago de</p>
                <p className={style.paragrafo2}>Serviços gráficos</p>
                <p className={style.paragrafo3}>& Soluções Digitais</p>
                <small className={style.paragrafo4}>Impressão, gráfica rapida, xerox</small> <br />
                <small className={style.paragrafo5}>de Alta Qualidade</small>
                <Rodape />
            </div>

        </>

    )
}