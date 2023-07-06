import { useState, useEffect } from "react";
import CircularProgress from "@mui/joy/CircularProgress";
import Redes from "./Redes/Redes";
import "./Resultados.css";

function Resultados({
	respuestasCorrectas,
	limitePreguntas,
	reiniciarJuego,
	salirDelJuego,
}) {
	const [mensaje, setMensaje] = useState(null);

	useEffect(() => {
		fetch("http://localhost:3500/resultados")
			.then((res) => res.json())
			.then((data) => {
				let varianteMensaje = 0;
				console.log("Correctas: ", respuestasCorrectas);

				respuestasCorrectas === 5
					? (varianteMensaje = 2)
					: respuestasCorrectas === 3 || respuestasCorrectas === 4
					? (varianteMensaje = 1)
					: (varianteMensaje = 0);

				setMensaje(data[varianteMensaje]);
			});
	}, []);

	return (
		<>
			{mensaje ? (
				<div className="resultados card-juego">
					<span>
						<CircularProgress
							determinate
							value={(respuestasCorrectas / limitePreguntas) * 100}
						/>
					</span>
					<h2>{mensaje.titulo}</h2>
					<p>{mensaje.descripcion}</p>
					<div className="botones">
						<button onClick={() => reiniciarJuego()}>Jugar de nuevo</button>
						<button onClick={() => salirDelJuego()}>Seguir explorando</button>
					</div>
					<Redes textoCompartir={mensaje.compartir} />
				</div>
			) : (
				<h3>Cargando</h3>
			)}
		</>
	);
}

export default Resultados;
