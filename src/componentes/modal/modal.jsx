/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react'
import style from './modal.module.css'

export default function modal({ titulo, isClose }) {


    const [dadosServicos, setDadosServicos] = useState([]);

    const [servicosFiltrados, setServicosFiltrados] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function buscarDados() {
            try {
                const resposta = await fetch('src/dados/dados.json');
                if (!resposta.ok) {
                    throw new Error(`Erro HTTP! Status: ${resposta.status}`);
                }
                const resultado = await resposta.json();


                setDadosServicos(resultado.servicos || []);
                setLoading(false);
            } catch (erro) {
                console.error("Erro ao buscar ou processar os dados:", erro);
                setLoading(false);
            }
        }
        buscarDados();
    }, []);

    useEffect(() => {
        const servicoEncontrato = dadosServicos.find((servico) => servico.titulo === titulo)

        if (servicoEncontrato) {
            setServicosFiltrados(servicoEncontrato.subServicos || [])
        } else {
            setServicosFiltrados([])
        }
    }, [titulo, dadosServicos])

    return (
        <>
            <div className={style.modal}>

                <header className={style.headerModal}> <h2>{titulo} </h2> <button className={style.btnClose} onClick={isClose} >X</button></header>
                {loading && <p>Carregando sub-serviços...</p>}
                {!loading && servicosFiltrados.length === 0 && (<p>Nenhum sub-Serviço encontrado {titulo}</p>)}

                {!loading && setServicosFiltrados.length > 0 && (
                    <ul>
                        {servicosFiltrados.map((sub, index) => {
                            return (

                                <li className={style.lista} key={index} ><span>{sub.servico.toUpperCase()}</span><span>R$ {Number(sub.preco).toFixed(2).replace('.', ',')}</span></li>
                            )
                        })}
                    </ul>
                )}


            </div >
        </>
    )
}