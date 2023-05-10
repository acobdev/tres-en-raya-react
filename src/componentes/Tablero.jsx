import React from 'react';

import Casilla from './Casilla.jsx';
import '../estilos/Tablero.css';

function Tablero({ esTurnoDeX, casillas, accion, hayGanador }) 
{
    const ganador = hayGanador(casillas);
    
    /* FUNCIÓN PARA GESTIONAR LOS EVENTOS DE BOTÓN: */
    function gestionarClick(i) 
    {
        if (casillas[i] === null && ganador === null) {

            //Hacemos una copia del array con nuestros estados:
            const casillasCopia = casillas.slice();

            //Imprimimos el valor del jugador en la casilla:
            if (esTurnoDeX) {
                casillasCopia[i] = 'X';
            } else {
                casillasCopia[i] = 'O';
            }

            accion(casillasCopia);
        }
    }


    //Código HTML embebido en el archivo JSX:
    return (
        <div className='contenedor-tablero'>
            <div className='fila-tablero'>
                <Casilla valor={casillas[0]} gestionClick={() => gestionarClick(0)} />
                <Casilla valor={casillas[1]} gestionClick={() => gestionarClick(1)} />
                <Casilla valor={casillas[2]} gestionClick={() => gestionarClick(2)} />
            </div>
            <div className='fila-tablero'>
                <Casilla valor={casillas[3]} gestionClick={() => gestionarClick(3)} />
                <Casilla valor={casillas[4]} gestionClick={() => gestionarClick(4)} />
                <Casilla valor={casillas[5]} gestionClick={() => gestionarClick(5)} />
            </div>
            <div className='fila-tablero'>
                <Casilla valor={casillas[6]} gestionClick={() => gestionarClick(6)} />
                <Casilla valor={casillas[7]} gestionClick={() => gestionarClick(7)} />
                <Casilla valor={casillas[8]} gestionClick={() => gestionarClick(8)} />
            </div>
        </div>
    );
}

export default Tablero;