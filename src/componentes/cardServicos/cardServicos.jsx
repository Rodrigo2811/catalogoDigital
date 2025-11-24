

import style from './cardServicos.module.css'

export default function CardServicos({ icone, titulo, descricao, onclick }) {
    return (
        <div className={style.card} onClick={onclick} >
            <div className={style.containerLeft}>

                {icone}
            </div>
            <div className={style.containerRight}>

                <p className={style.tituloServico}>{titulo}</p>
                <small className={style.descripitionServico}>{descricao}</small>
            </div>
        </div>
    )
}