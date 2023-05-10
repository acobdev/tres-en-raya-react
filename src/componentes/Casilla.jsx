import React from 'react';

import '../estilos/Casilla.css';

function Casilla({ valor, gestionClick }) {


    //CÓDIGO HTML EMBEBIDO EN EL CÓDIGO JSX:
    return (
        <button 
            className='casilla-tablero'
            onClick={gestionClick}
        >
            {valor}
        </button>
    );
}

export default Casilla;