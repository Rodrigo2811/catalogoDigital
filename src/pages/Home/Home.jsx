import Rodape from '../../componentes/rodape/rodape'
import style from './home.module.css'
export default function Home() {
    return (
        <>
            <div className={style.container}>
                <p className={style.paragrafo1}>Catálago de</p>
                <p className={style.paragrafo2}>Serviços gráficos</p>
                <p className={style.paragrafo3}>e Soluções digitais</p>
                <small className={style.paragrafo4}>Impressão profissional, gráfica rápida </small>
                <small className={style.paragrafo5}>e cópias de alta qualidade.</small>
                <small className={style.paragrafo6}>O melhor custo beneficio para você</small>
                <Rodape />
            </div>

        </>

    )
}