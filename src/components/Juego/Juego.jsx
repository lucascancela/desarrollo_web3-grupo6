import { useState, useEffect } from "react";
import PantallaInicial from "./PantallaInicial/PantallaInicial";
import Quiz from "./Quiz/Quiz";
import Resultados from "./Resultados/Resultados";
import "./Juego.css";

function Juego() {
	const [mostrarQuiz, setMostrarQuiz] = useState(false);
	const [pantallaInicial, setPantallaInicial] = useState(true);
	const [preguntas, setPreguntas] = useState({});
	const [loading, setLoading] = useState(false);
	const [ordenAleatorio, setOrdenAleatorio] = useState([]);
	const [preguntaActual, setPreguntaActual] = useState(0);
	const [respuestasCorrectas, setRespuestasCorrectas] = useState(0);
	const limitePreguntas = 5;

	useEffect(() => {
		fetch("http://localhost:3500/quiz")
			.then((res) => res.json())
			.then((data) => {
				setPreguntas(data);
				/* Desordenamos las preguntas, obtenemos 5 de ellas y desordenamos
			las opciones de cada pregunta */
				const random = mezclarArray(data)
					.slice(0, 5)
					.map((pregunta) => ({
						...pregunta,
						opciones: mezclarArray(pregunta.opciones),
					}));
				setOrdenAleatorio(random);
				setLoading(true);
			});
	}, []);

	const mezclarArray = (array) => {
		const arrayMezclado = [...array];
		for (let i = arrayMezclado.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[arrayMezclado[i], arrayMezclado[j]] = [
				arrayMezclado[j],
				arrayMezclado[i],
			];
		}
		return arrayMezclado;
	};

	const siguientePregunta = () => {
		if (preguntaActual < limitePreguntas) {
			setPreguntaActual(preguntaActual + 1);
		}
	};

	const aumentarRespuestasCorrectas = () => {
		setRespuestasCorrectas(respuestasCorrectas + 1);
	};

	const reiniciarJuego = () => {
		const random = mezclarArray(preguntas)
			.slice(0, 5)
			.map((pregunta) => ({
				...pregunta,
				opciones: mezclarArray(pregunta.opciones),
			}));
		setOrdenAleatorio(random);
		setPreguntaActual(0);
		setRespuestasCorrectas(0);
		setPantallaInicial(true);
	};

	const salirDelJuego = () => {
		setMostrarQuiz(false);
		document.querySelector(".quiz").classList.remove("mostrar");
		setTimeout(() => reiniciarJuego(), 500);
	};

	return (
		<section className="juego">
			<img
				src="https://i.postimg.cc/JzH1djSW/Banner-Juego-Interactivo.png"
				alt="Imagen de un tigre en peligro de extinción"
			/>
			<div className="juego__info">
				<h2>Inicia la Misión: ¡Protege la Naturaleza!</h2>
				<p>
					Únete a la misión de los Guardianes de la Naturaleza para aprender
					sobre las especies en peligro, sus hábitats y las acciones que podemos
					tomar para protegerlos. Pon a prueba tus conocimientos, desafía tus
					habilidades y conviértete en un verdadero defensor de la naturaleza.
				</p>
				<button onClick={() => setMostrarQuiz(true)}>
					<ion-icon name="play-outline"></ion-icon>
					<p>Jugar</p>
				</button>
			</div>

			<section className={`${mostrarQuiz ? "quiz mostrar" : "quiz"}`}>
				<button
					className="cerrar-juego"
					onClick={() => salirDelJuego()}>
					<ion-icon name="arrow-back-sharp"></ion-icon>
				</button>
				{pantallaInicial ? (
					<PantallaInicial setPantallaInicial={setPantallaInicial} />
				) : loading ? (
					preguntaActual < limitePreguntas ? (
						<Quiz
							pregunta={ordenAleatorio[preguntaActual]}
							siguientePregunta={siguientePregunta}
							aumentarRespuestasCorrectas={aumentarRespuestasCorrectas}
						/>
					) : (
						<Resultados
							respuestasCorrectas={respuestasCorrectas}
							limitePreguntas={limitePreguntas}
							reiniciarJuego={reiniciarJuego}
							salirDelJuego={salirDelJuego}
						/>
					)
				) : (
					<h3>Cargando...</h3>
				)}
			</section>
		</section>
	);
}

export default Juego;
