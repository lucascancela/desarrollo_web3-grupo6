import React, { useState } from "react";
import "./Quiz.css";

function Quiz({ pregunta, siguientePregunta, aumentarRespuestasCorrectas }) {
	const [opcionSeleccionada, setOpcionSeleccionada] = useState(-1); // Estado para cambiar a opcion seleccionada
	const [deshabilitado, setDeshabilitado] = useState(false); // Estado para deshabilitar opciones
	const tiempoEntrePreguntas = 1;

	console.log("Correcta: ", pregunta.respuesta);

	const handleOpciones = (respuesta, index) => {
		setDeshabilitado(true);
		if (respuesta === pregunta.respuesta) {
			aumentarRespuestasCorrectas();
		}
		setOpcionSeleccionada(index);

		// Reinicio de pregunta
		setTimeout(() => {
			setOpcionSeleccionada(-1);
			setDeshabilitado(false);
			siguientePregunta();
		}, tiempoEntrePreguntas * 1000);
	};

	return (
		<div className="pregunta card-juego">
			<h2>{pregunta?.pregunta}</h2>
			<ul className="opciones">
				{pregunta?.opciones.map((opcion, index) => (
					<li
						key={`opcion_${index}`}
						onClick={() => handleOpciones(opcion, index)}
						className={`${opcionSeleccionada === index ? "seleccionado" : ""} ${
							deshabilitado ? "deshabilitado" : ""
						}`}>
						{opcion}
					</li>
				))}
			</ul>
		</div>
	);
}

export default Quiz;
