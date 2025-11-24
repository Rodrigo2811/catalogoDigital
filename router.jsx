import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './src/pages/Home/Home'
import Servicos from './src/pages/Servicos/Servicos'

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Servicos' element={<Servicos />} />
            </Routes>
        </BrowserRouter>

    )
}

export default Rotas;