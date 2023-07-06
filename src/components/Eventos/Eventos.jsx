import React, { useState, useEffect } from "react";
import AgendarBoton from "./AgendarBoton/AgendarBoton";
import "./Eventos.css";
import Agregar from "./Agregar/Agregar";

function Eventos() {
	const [eventos, setEventos] = useState([]);
	const [loading, setLoading] = useState(true);
	const [eventoExpandido, setEventoExpandido] = useState(null);
	const [mostrarModal, setMostrarModal] = useState(false);

	useEffect(() => {
		fetch("http://localhost:3500/eventos")
			.then((res) => res.json())
			.then((data) => {
				setEventos(data);
				setLoading(false);
			});
	}, []);

	const formatearFecha = (fecha) => {
		const [day, month, year] = fecha.split("/");
		const date = new Date(year, month - 1, day);

		if (isNaN(date.getTime())) {
			return { mes: "", dia: "" };
		}

		const mes = date.toLocaleString("default", { month: "short" });
		const dia = date.getDate();

		return { mes, dia };
	};

	const expandirEvento = (index) => {
		if (eventoExpandido === index) {
			setEventoExpandido(null);
		} else {
			setEventoExpandido(index);
		}
	};

	const agregarEvento = (nuevoEvento) => {
		setEventos([...eventos, nuevoEvento]);
	};

	const eliminarEvento = (index) => {
		const nuevosEventos = [...eventos];
		nuevosEventos.splice(index, 1);
		setEventos(nuevosEventos);
	};

	return (
		<section className="eventos">
			<h2>¡Descubre emocionantes eventos y únete a la acción!</h2>
			<p>
				Sumérgete en el apasionante mundo de la conservación de la biodiversidad
				a través de nuestros increíbles eventos. Desde conferencias inspiradoras
				hasta actividades prácticas, encontrarás oportunidades para aprender,
				conectarte con expertos y marcar la diferencia. ¡No te pierdas la
				oportunidad de unirte a nosotros y ser parte del cambio!
			</p>
			<div className="botones">
				<button
					className="nuevoEvento"
					onClick={() => setMostrarModal(true)}>
					<ion-icon name="add"></ion-icon>
					<p>Agregar evento</p>
				</button>
			</div>
			<div className={`modal ${mostrarModal ? "--mostrar" : ""}`}>
				<Agregar
					onClose={() => setMostrarModal(false)}
					onAgregar={agregarEvento}
				/>
			</div>
			<div className="eventos-container">
				{!loading ? (
					eventos.map((item, index) => {
						const { mes, dia } = formatearFecha(item.fecha);

						return (
							<div
								className={`evento ${
									eventoExpandido === index ? "--expandido" : ""
								}`}
								key={index}>
								<div className="evento__head">
									<div className="fecha">
										<p>{mes}</p>
										<p>{dia}</p>
									</div>
									<span>
										<h3>{item.nombre}</h3>
										<h4>{item.lugar}</h4>
									</span>
									<div className="evento__head-actions">
										<button onClick={() => expandirEvento(index)}>
											<ion-icon name="chevron-down"></ion-icon>
										</button>
										<button className="eliminarEvento" onClick={() => eliminarEvento(index)}>
											<ion-icon name="trash"></ion-icon>
										</button>
									</div>
								</div>
								<div className="evento__body">
									<div className="etiquetas">
										{item.etiquetas?.map((tag, n) => (
											<span key={n}>{tag}</span>
										))}
									</div>
									<p>{item.descripcion}</p>
									<AgendarBoton evento={item} />
								</div>
							</div>
						);
					})
				) : (
					<h3>Cargando...</h3>
				)}
			</div>
		</section>
	);
}

export default Eventos;
