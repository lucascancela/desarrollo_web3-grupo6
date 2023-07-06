import Galeria from "./components/Galeria/Galeria";
import Juego from "./components/Juego/Juego";
import Conceptos from "./components/Conceptos/Conceptos";
import PantallaInicial from "./components/PantallaInicial/PantallaInicial";
import Eventos from "./components/Eventos/Eventos";
import "./App.css";

function App() {
	return (
		<>
			<PantallaInicial />
			<Conceptos />
			<Galeria />
			<Juego />
			<Eventos />
		</>
	);
}

export default App;
