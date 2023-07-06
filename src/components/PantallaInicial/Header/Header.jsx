import { useState, useEffect } from "react";
import "./Header.css";

function Header() {
	const [objetivos, setObjetivos] = useState({});
	const [loading, setLoading] = useState(true);

	/* LOADING */
	useEffect(() => {
		fetch("http://localhost:3500/objetivos")
			.then((res) => res.json())
			.then((data) => {
				setObjetivos(data);
				setLoading(false);
			});
	}, []);

	return (
		<header>
			<div className="header__image">
				<img
					src="https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Libraries/Production+Library/29-09-2020_Unsplash_Slovenia_bears.jpg/image1440x560cropped.jpg"
					alt="Imagen del header"
				/>
			</div>
			<div className="header__info">
				<h1>- Biodiversidad -</h1>
				<p>
					Únete a la misión de los Guardianes de la Naturaleza para preservar la
					belleza y la vitalidad de nuestro planeta. Explora la importancia de
					la biodiversidad, descubre las especies en peligro de extinción y
					aprende cómo puedes colaborar en la protección de nuestros
					ecosistemas. Juntos, podemos marcar la diferencia y crear un futuro
					sostenible para las generaciones venideras.
				</p>
			</div>

			<section className="objetivos">
				<div className="objetivos-container">
					{!loading ? (
						objetivos?.map((item, index) => (
							<div
								key={index}
                data-aos="fade-down"
								className="objetivo">
								<span className="icon">
									<ion-icon name="checkmark"></ion-icon>
								</span>
								<h3>{item.titulo}</h3>
								<p>{item.descripcion}</p>
							</div>
						))
					) : (
						<h3>Cargando...</h3>
					)}
				</div>
			</section>
		</header>
	);
}

export default Header;
