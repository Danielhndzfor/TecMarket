import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import AddProduct from './components/AddProducts';
import LogoImg from './assets/Logo.png';
import NotificacionImg from './assets/notificacion.svg';
import PerfilImg from './assets/perfil.svg';
import Footer from './Footer';
import './nav.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <div className="app">
        <div className="nav">
          <div className="logo">
            <Link to="/"><img className='logoL' src={LogoImg} alt="" /></Link>
          </div>
          <nav>
              <li><Link to="/">Home</Link></li>
              <li><a href="#">Favoritos</a></li>
              <li><Link to="/add-product">Vender</Link></li>
              <li><a href="#"><img className='navIcon' src={NotificacionImg} alt="Notificaciones" /></a></li>
              <li><a href="#"><img className='navIcon' src={PerfilImg} alt="Perfil" /></a></li>
          </nav>
        </div>
      </div>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-product" element={<AddProduct />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  </React.StrictMode>
);
