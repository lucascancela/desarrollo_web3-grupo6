import React, { useState } from "react";
import "./Agregar.css";

function Agregar({ onClose, onAgregar }) {
	const [nombre, setNombre] = useState("");
	const [lugar, setLugar] = useState("");
	const [fecha, setFecha] = useState("");
	const [etiquetas, setEtiquetas] = useState("");
	const [descripcion, setDescripcion] = useState("");

	const handleAgregar = () => {
		// Ajustar el formato de la fecha
		const fechaFormateada = fecha.split("-").reverse().join("/");

		const nuevoEvento = {
			nombre,
			lugar,
			fecha: fechaFormateada,
			etiquetas: etiquetas.split(","),
			descripcion,
		};

		onAgregar(nuevoEvento);
		onClose();
	};

	return (
		<div className="content">
			<h2>Crea un nuevo evento</h2>
			<div className="body">
				<input
					type="text"
					name="nombre"
					placeholder="Nombre del evento"
					value={nombre}
					onChange={(e) => setNombre(e.target.value)}
				/>
				<input
					type="text"
					name="lugar"
					placeholder="Lugar"
					value={lugar}
					onChange={(e) => setLugar(e.target.value)}
				/>
				<input
					type="date"
					name="fecha"
					placeholder="Fecha (DD/MM/AAAA)"
					value={fecha}
					onChange={(e) => setFecha(e.target.value)}
				/>
				<input
					type=""
					name="etiquetas"
					placeholder="Etiquetas (separadas por coma)"
					value={etiquetas}
					onChange={(e) => setEtiquetas(e.target.value)}
				/>
				<textarea
					name="descripcion"
					maxLength={400}
					placeholder="Descripción"
					value={descripcion}
					onChange={(e) => setDescripcion(e.target.value)}></textarea>
			</div>
			<div className="buttons">
				<button onClick={onClose}>Cancelar</button>
				<button onClick={handleAgregar}>Agregar</button>
			</div>
		</div>
	);
}

export default Agregar;
