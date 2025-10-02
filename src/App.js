import React from 'react';
import './App.css';

import Header from './components/Header';
import Servicios from './components/Servicios';
import Contacto from './components/Contacto';
import Login from './components/Login';
import SlideShow from './components/SlideShow';
import ServiciosInteractivos from './components/ServiciosInteractivos';

function App() {
  return (
    <div className="App">
      <Login />
      <Header />
      <SlideShow />
      <Servicios />
      <ServiciosInteractivos />
      <Contacto />
    </div>
  );
}

export default App;