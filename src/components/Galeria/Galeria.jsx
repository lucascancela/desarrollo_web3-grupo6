import { useState, useEffect } from "react";
import "./Galeria.css";

function Galery() {
	const [animales, setAnimales] = useState([]);
	const [loading, setLoading] = useState(false);
	const [animalSeleccionado, setAnimalSeleccionado] = useState(null);
	const [mostrarTodo, setMostrarTodo] = useState(false);
	const animalesVisibles = mostrarTodo ? animales : animales.slice(0, 6);

	/* LOADING */
	useEffect(() => {
		fetch("http://localhost:3500/animales")
			.then((res) => res.json())
			.then((data) => {
				setAnimales(data);
				setLoading(true);
				AOS.init();
			});
	}, []);

	/* MODAL */
	const abrirModal = (animal) => {
		setAnimalSeleccionado(animal);
		setTimeout(() => {
			document.body.classList.add("modal-abierto");
		}, 500);
		document.querySelector(".modal-container").classList.add("modal-abierto");
	};

	const cerrarModal = () => {
		setTimeout(() => {
			setAnimalSeleccionado(null);
			document.body.classList.remove("modal-abierto");
		}, 500);
		document
			.querySelector(".modal-container")
			.classList.remove("modal-abierto");
	};

	const handleVerMas = () => {
		setMostrarTodo(!mostrarTodo);
	};

	/* Destructuring de animalSeleccionado */
	const {
		nombre,
		nombreCientifico,
		descripcion,
		habitat,
		distribucion,
		estadoConservacion,
		causasDisminucion,
		importanciaEcologica,
		accionesConservacion,
		vistaPrevia,
	} = animalSeleccionado || {};

	return (
		<section className="galeria_animales">
			<h2>Un Vistazo a la Biodiversidad Amenazada</h2>
			<p>
				Explora esta galería para descubrir la diversidad de animales en peligro
				de extinción y aprender sobre su importancia ecológica. Cada tarjeta en
				la galería representa a un animal único y valioso que enfrenta serias
				amenazas para su supervivencia.
			</p>

			<div className={`animales-container ${mostrarTodo ? "--todo" : ""}`}>
				{/* Renderizar cards animales */}
				{loading ? (
					animalesVisibles?.map((animal, index) => (
						<div
							key={`animal_${index}`}
							className="animal"
							data-aos="fade-up"
							onClick={() => abrirModal(animal)}>
							<span></span>
							<img
								src={animal.vistaPrevia}
								alt={"Imagen de " + animal.nombre}
							/>
							<div className="animal__info">
								<h3>{animal.nombre}</h3>
								<p>{animal.nombreCientifico}</p>
							</div>
							<div className="flecha">
								<span></span>
								<span></span>
								<span></span>
							</div>
						</div>
					))
				) : (
					<h3>Cargando...</h3>
				)}
				<button
					className={`ver-mas ${mostrarTodo ? "--activo" : ""}`}
					onClick={handleVerMas}>
					<p>{mostrarTodo ? "Ver menos animales" : "Ver más animales"}</p>
					<ion-icon name={mostrarTodo ? "arrow-up" : "arrow-down"}></ion-icon>
				</button>
			</div>

			<div className="modal-container">
				{animalSeleccionado && (
					<div className={`modal ${animalSeleccionado ? "modal-abierto" : ""}`}>
						{/* Contenido del modal */}
						<div className="modal__foto">
							<div className="modal-nombres">
								<h2>{nombre}</h2>
								<h3>{nombreCientifico}</h3>
							</div>
							<img
								src={vistaPrevia}
								alt={"Imagen de " + nombre}
							/>
						</div>
						<div className="modal__info">
							<p>{descripcion}</p>
							<div className="tabla">
								<div className="tabla-item">
									<h4>Hábitat</h4>
									<p>{habitat}</p>
								</div>
								<div className="tabla-item">
									<h4>Distribución</h4>
									<p>{distribucion}</p>
								</div>
								<div className="tabla-item">
									<h4>Estado de conservación</h4>
									<p>{estadoConservacion}</p>
								</div>
								<div className="tabla-item">
									<h4>Causas de disminución</h4>
									<p>{causasDisminucion}</p>
								</div>
								<div className="tabla-item">
									<h4>Importancia ecológica</h4>
									<p>{importanciaEcologica}</p>
								</div>
								<div className="tabla-item">
									<h4>Prácticas de preservación</h4>
									<p>{accionesConservacion}</p>
								</div>
							</div>
						</div>

						<button
							className="cerrar-modal"
							onClick={cerrarModal}>
							<ion-icon name="arrow-back-sharp"></ion-icon>
						</button>
					</div>
				)}
			</div>
		</section>
	);
}

export default Galery;
