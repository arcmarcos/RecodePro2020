import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Contato from './pages/Contato';
import Home from './pages/Home'
import Lojas from './pages/Lojas';
import NotFound from './pages/NotFound';
import Produtos from './pages/Produtos';


import './style/normalize.css';

function App() {
  return (
    
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="produtos" element={<Produtos />}/>
        <Route path="lojas" element={<Lojas />}/>
        <Route path="contato" element={<Contato />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
