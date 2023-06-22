import Cuadrado from './Cuadrado';
import Reinicio from './Reincio'
import { useState } from 'react';

function Juego({CalcularGanador, IsBoardFull}) {
    const [cuadrados, setCuadrados] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);
    
    const ganador = CalcularGanador(cuadrados);

    function GetStatus() {
        if(ganador) {
            return "Ganó: " + ganador;
        } else if(IsBoardFull(cuadrados)) {
            return "¡Empate!";
        } else {
            return "Siguiente jugador: " + (isXNext ? "X" : "O");
        }
    }

    function DibujarCuadrado(i) {
        return < Cuadrado valor={cuadrados[i]} onClick={() => {
            if(cuadrados[i] != null || ganador != null) {
                return;
            }

            const siguienteCuadrados = cuadrados.slice();
            siguienteCuadrados[i] = isXNext ? "X" : "O";
            setCuadrados(siguienteCuadrados);

            setIsXNext(!isXNext);
        }} />
    }

    function DibujarBotonReinicio() {
        return(
            < Reinicio onClick={() => {
                setCuadrados(Array(9).fill(null));
                setIsXNext(true);
            }} />
        )
    }

    return(
        <div className='container'>
            <div className='game'>
                <div className='game-board'>
                    <div className='board-row'>
                        {DibujarCuadrado(0)}
                        {DibujarCuadrado(1)}
                        {DibujarCuadrado(2)}
                    </div>
                    <div className='board-row'>
                        {DibujarCuadrado(3)}
                        {DibujarCuadrado(4)}
                        {DibujarCuadrado(5)}
                    </div>
                    <div className='board-row'>
                        {DibujarCuadrado(6)}
                        {DibujarCuadrado(7)}
                        {DibujarCuadrado(8)}
                    </div>
                </div>
                <div className='game-info'>
                    {GetStatus()}
                </div>
                <div className='restart-button'>
                    {DibujarBotonReinicio()}
                </div>
            </div>
        </div>
    );
}

export default Juego;