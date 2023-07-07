import React from "react";
import "./AgendarBoton.css";

function formatearFecha(fecha) {
	const [day, month, year] = fecha.split("/");
	const fechaFormateada = new Date(`${year}-${month}-${day}`);
	fechaFormateada.setDate(fechaFormateada.getDate() + 2);

	const formattedYear = fechaFormateada.getFullYear();
	const formattedMonth = (fechaFormateada.getMonth() + 1)
		.toString()
		.padStart(2, "0");
	const formattedDay = fechaFormateada.getDate().toString().padStart(2, "0");

	return `${formattedYear}${formattedMonth}${formattedDay}T000000Z`;
}

function AgendarBoton({ evento }) {
	const handleButtonClick = () => {
		const { nombre, fecha, lugar, descripcion } = evento;
		const startDateTime = formatearFecha(fecha);
		const endDate = new Date(new Date(fecha).getTime() + 24 * 60 * 60 * 1000); // Agregar un día (24 horas)
		const endDateTime = formatearFecha(
			`${endDate.getMonth() + 1}/${endDate.getDate()}/${endDate.getFullYear()}`
		);

		const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
			nombre
		)}&dates=${encodeURIComponent(startDateTime)}/${encodeURIComponent(
			endDateTime
		)}&location=${encodeURIComponent(lugar)}&details=${encodeURIComponent(
			descripcion
		)}`;

		window.open(url, "_blank");
	};

	return (
		<button
			className="agendar"
			onClick={handleButtonClick}>
			<ion-icon name="calendar-number-outline"></ion-icon>
			<p>Agendar en Google Calendar</p>
		</button>
	);
}

export default AgendarBoton;
