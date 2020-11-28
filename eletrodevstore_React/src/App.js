import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import Footer from './components/Footer';
import Header from './components/Header';
import Pages from './pages/Pages';


function App() {
  return (

    <BrowserRouter>
      <Header />

      <Pages />

      <Footer />
    </BrowserRouter>
  );
}

export default App;
