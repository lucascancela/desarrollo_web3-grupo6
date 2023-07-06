import React from "react";
import "./AgendarBoton.css";

function formatearFecha(fecha) {
  const [day, month, year] = fecha.split("/");
  const fechaFormateada = `${year}${month.padStart(2, "0")}${day.padStart(2, "0")}`;
  return `${fechaFormateada}T000000Z`;
}

function AgendarBoton({ evento }) {
  const handleButtonClick = () => {
    const { nombre, fecha, lugar } = evento;
    const startDateTime = formatearFecha(fecha);
    const endDateTime = formatearFecha(fecha);

    const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      nombre
    )}&dates=${encodeURIComponent(
      startDateTime
    )}/${encodeURIComponent(endDateTime)}&location=${encodeURIComponent(
      lugar
    )}`;

    window.open(url, "_blank");
  };

  return (
    <button className="agendar" onClick={handleButtonClick}>
      <ion-icon name="calendar-clear-outline"></ion-icon>
      <p>Agendar en Google Calendar</p>
    </button>
  );
}

export default AgendarBoton;
