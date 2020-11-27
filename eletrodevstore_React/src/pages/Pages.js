import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Contato from '../pages/Contato';
import Home from '../pages/Home'
import Lojas from '../pages/Lojas';
import NotFound from '../pages/NotFound';
import Produtos from '../pages/Produtos';

const Pages = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="produtos" element={<Produtos />}/>
        <Route path="lojas" element={<Lojas />}/>
        <Route path="contato" element={<Contato />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
  )
}

export default Pages
