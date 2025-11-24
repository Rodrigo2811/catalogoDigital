import { useState } from 'react'

import Header from '../../componentes/header/header'
import CardServicos from '../../componentes/cardServicos/cardServicos'
import Modal from '../../componentes/modal/modal'

import { BsFillPrinterFill, BsUnion, BsUsbDriveFill, BsScissors, BsBoxFill, BsGlobe, BsTools } from 'react-icons/bs'

import style from './servicos.module.css'

export default function Servicos() {


    const [modalAberto, setModalAberto] = useState(false)
    const [servicoSelecionado, setServicoSelecionado] = useState({})


    const abrirModal = (titulo, descricao) => {
        setServicoSelecionado({ titulo, descricao })
        setModalAberto(true)
    }

    const fechar = () => {
        setModalAberto(false)
    }

    return (
        <>
            <Header titulo='Nossos Serviços' />


            <section className={style.secao}>

                <CardServicos
                    icone={<BsFillPrinterFill />}
                    titulo='Impressão'
                    descricao='Folder, Panfleto, Oficio, Foto'
                    onclick={() => abrirModal('Impressão', 'Folder, Panfleto, Oficio, Foto')}
                />

                <CardServicos
                    icone={<BsScissors />}
                    titulo='Adesivos & Rótulos'
                    descricao='Foto, Vinil'
                    onclick={() => abrirModal('Adesivos', 'Foto, Vinil')}
                />


                <CardServicos
                    icone={<BsUnion />}
                    titulo='Xerox & Cópia'
                    descricao='P&B, Colorida, Scaner'
                    onclick={() => abrirModal('Xerox & Cópias', 'P&B, Colorida, Scaner')}
                />

                <CardServicos
                    icone={<BsUsbDriveFill />}
                    titulo='Gravação Pendrive'
                    descricao='Musicas, Fotos'
                    onclick={() => abrirModal('Gravação Pendrive', 'Musicas, Fotos')}
                />

                <CardServicos
                    icone={<BsBoxFill />}
                    titulo='Embalagem'
                    descricao='Papel kraft, Caixas, Fita Adesiva, Envelope'
                    onclick={() => abrirModal('Embalagem', 'Papel kraft, Caixas, Fita Adesiva, Envelope')}
                />

                <CardServicos
                    icone={<BsGlobe />}
                    titulo='Serviços Digitais'
                    descricao='Criação de Cards, Sites'
                    onclick={() => abrirModal('Serviços Digitais', 'Criação de Cards, Sites')}
                />


                <CardServicos
                    icone={<BsTools />}
                    titulo='Manutenção'
                    descricao='Formatação PC e Celulares, Impressora, Instação de Programas'
                    onclick={() => abrirModal('Manutenção', 'Formatação PC e Celulares, Impressora, Instação de Programas')}
                />


                <CardServicos
                    icone={<BsTools />}
                    titulo='Documentos'
                    descricao='Contrato compra e venda, Aluguel, Recibos'
                    onclick={() => abrirModal('Documentos', 'Contrato compra e venda, Aluguel, Recibos')}
                />
                {
                    modalAberto && (
                        <Modal
                            isOpen={modalAberto}
                            isClose={fechar}
                            titulo={servicoSelecionado.titulo}

                        />
                    )
                }
            </section>
        </>
    )
}