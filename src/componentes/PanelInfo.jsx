import React from 'react';

import '../estilos/PanelInfo.css';

function PanelInfo(props) {

    //String JS donde se guardará el jugador del actual turno:
    const etiquetaJugador = props.esTurnoDeX ? 'X' : 'O';

    //Área lógica donde se guarda el String que informa 
    //al jugador del resultado del juego:
    const ganador = props.hayGanador(props.momento);
    let etiquetaGanador = "";

    if (ganador !== null) {
        etiquetaGanador = "¡El jugador '" + ganador + "' ha ganado la partida!"
    } else if (props.turno > 8) {
        etiquetaGanador = "El juego ha terminado en empate."
    }
    

    //Fragmento HTML embebido en el código JSX:
    return (
        <div className='contenedor-info'>
            <h3 className='info-turno'>Turno del jugador '{etiquetaJugador}':</h3>
            <div className='contenedor-turnos'>
                {props.historial}
            </div>
            <p className='texto-ganador'>{etiquetaGanador}</p>
        </div>
    );
}

export default PanelInfo;