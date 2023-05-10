import React from 'react';

import logo from '../imagenes/logo.svg';
import '../estilos/Cabecera.css'

function Cabecera() {
    return (
        <header className='contenedor-cabecera'>
            <div className='contenedor-imagen'>
                <img className="logo-react" src={logo} alt="Logo de React" />
            </div>
            <div className='contenedor-texto'>
                <h1 className='titulo-app'>'Tres-en-raya' en React</h1>
                <h4 className='subtitulo-app'>Realizado por Álvaro Cobano</h4>
            </div>
            <div className='contenedor-imagen'>
                <img className="logo-react" src={logo} alt="Logo de React" />
            </div>
        </header>
    );
}

export default Cabecera;