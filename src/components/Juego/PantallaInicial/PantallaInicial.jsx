import { useEffect, useState } from "react";
import "./PantallaInicial.css";

function PantallaInicial({ setPantallaInicial }) {
	return (
		<div className="pantalla-inicial card-juego">
			<h2>¡Conviértete en Guardián de la Naturaleza!</h2>
      <p>En este emocionante juego interactivo, te invitamos a convertirte en un valiente defensor de la naturaleza. Acompaña a los Guardianes de la Naturaleza en su misión para proteger a las especies en peligro de extinción y sus frágiles hábitats.</p>
			<button onClick={() => setPantallaInicial(false)}>Comenzar</button>
		</div>
	);
}

export default PantallaInicial;
