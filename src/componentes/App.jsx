import React, { useState }  from 'react';

import Cabecera from './Cabecera.jsx';
import Tablero from './Tablero.jsx';
import PanelInfo from './PanelInfo.jsx';
import '../estilos/App.css';

function App() {
  
  /* REACT HOOK PARA GUARDAR EL HISTORIAL DE TURNOS DE LA PARTIDA: */
  const [historial, setHistorial] = useState([Array(9).fill(null)]);

  /* REACT HOOK PARA GUARDAR EL NÚMERO DE TURNOS DE LA PARTIDA */
  const [contadorTurnos, setContadorTurnos] = useState(0);
  
  /* BOOLEANO JS EN EL QUE SE GUARDARÁ EL JUGADOR DEL TURNO ACTUAL */
  const esTurnoDeX = contadorTurnos % 2 === 0;

  //Guardamos la matriz de casillas que conforma el turno actual de la partida:
  const movimientoActual = historial[contadorTurnos];


  //Función lógica para calcular el ganador del juego:
  function calcularGanador(casillas) 
  {
    const posiblesCombinaciones = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < posiblesCombinaciones.length; i++) {

      const [a, b, c] = posiblesCombinaciones[i];

      if (casillas[a] && casillas[a] === casillas[b] && casillas[a] === casillas[c]) {
        return casillas[a];
      }
    }

    return null;
  }

  //Función que conforma la lógica del turno:
  function gestionarTurno (proximoMovimiento)
  {
    const nuevoHistorial =  [...historial.slice(0, contadorTurnos + 1), proximoMovimiento];
    setHistorial(nuevoHistorial);
    setContadorTurnos(nuevoHistorial.length - 1);
  }

  function retrocederMovimiento(turnoMovimiento)
  {
    setContadorTurnos(turnoMovimiento);
  }

  const listaMovimientos = historial.map((casillas, movimiento) => {
    let etiquetaBtn = "VOLVER AL TURNO #" + (movimiento + 1);

    return (
      <button 
        className='btn-turnos' 
        id={movimiento} 
        key={movimiento} 
        onClick={() => retrocederMovimiento(movimiento)}
      >
        {etiquetaBtn}
      </button>
    );
  });


  /* FRAGMENTO HTML EMBEBIDO EN EL CÓDIGO JSX */
  return (
    <div className="App">
      <Cabecera />
      <Tablero 
        esTurnoDeX={esTurnoDeX}
        casillas={movimientoActual}
        accion={gestionarTurno}
        hayGanador={calcularGanador}
      />
      <PanelInfo 
        esTurnoDeX={esTurnoDeX}
        turno={contadorTurnos}
        momento={movimientoActual}
        historial={listaMovimientos}
        hayGanador={calcularGanador}
      />
    </div>
  );
}

export default App;