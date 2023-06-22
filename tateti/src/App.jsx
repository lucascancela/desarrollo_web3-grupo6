import './App.css';
import Juego from './Componentes/Juego';

function App() {
  function CalcularGanador(cuadrados) {
    const posiblesLineas = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for(let i = 0; i < posiblesLineas.length; i++) {
      const [a, b, c] = posiblesLineas[i];

      if(cuadrados[a] && cuadrados[a] === cuadrados[b] && cuadrados[a] === cuadrados[c]) {
        return cuadrados[a];
      }
    }

    return null;
  }

  function IsBoardFull(cuadrados) {
    for(let i = 0; i < cuadrados.length; i++) {
      if(cuadrados[i] == null) {
        return false;
      }
    }

    return true;
  }

  return < Juego CalcularGanador={CalcularGanador} IsBoardFull={IsBoardFull} />
}

export default App;