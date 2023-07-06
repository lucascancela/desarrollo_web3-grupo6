import { useState, useEffect } from "react";
import "./Conceptos.css";

function Conceptos() {
	const [conceptos, setConceptos] = useState({});
	const [loading, setLoading] = useState(true);
	const [sliderActive, setSliderActive] = useState(0);

	/* LOADING */
	useEffect(() => {
		fetch("http://localhost:3500/conceptos")
			.then((res) => res.json())
			.then((data) => {
				setConceptos(data);
				setLoading(false);
			});
	}, []);

	const handleSliderClick = (index) => {
		setSliderActive(index);
	};

	const handleSliderControl = (direction) => {
		if (direction === "prev") {
			if (sliderActive != 0) setSliderActive(sliderActive - 1);
			else setSliderActive(conceptos.length - 1);
		}
		if (direction === "next") {
			if (sliderActive != conceptos.length - 1)
				setSliderActive(sliderActive + 1);
			else setSliderActive(0);
		}
	};

	return (
		<section className="conceptos">
			<div className="slider">
				{!loading ? (
					<>
						{conceptos?.map((item, index) => (
							<div
								className={`slider__item ${
									sliderActive === index ? "--active" : ""
								}`}
								key={index}>
								<img
									src={item.img}
									alt={item.titulo}
								/>
								<div className="slider-info">
									<h3>{item.titulo}</h3>
									<p>{item.descripcion}</p>
								</div>
							</div>
						))}
						{/* Indicadores del slider */}
						<div className="slider-indicators">
							{conceptos.map((_, index) => (
								<span
									key={index}
									className={`indicator ${
										sliderActive === index ? "--active" : ""
									}`}
									onClick={() => handleSliderClick(index)}></span>
							))}
						</div>
						{/* Controles del slider */}
						<button
							className="slider-control prev-control"
							onClick={() => handleSliderControl("prev")}>
							<ion-icon name="chevron-back"></ion-icon>
						</button>
						<button
							className="slider-control next-control"
							onClick={() => handleSliderControl("next")}>
							<ion-icon name="chevron-forward"></ion-icon>
						</button>
					</>
				) : (
					<h3>Cargando...</h3>
				)}
			</div>
		</section>
	);
}

export default Conceptos;
