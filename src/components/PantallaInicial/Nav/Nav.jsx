import { useState, useEffect, useRef } from "react";
import Logo from "../../../assets/Logo.svg";
import "./Nav.css";

function Nav() {
	const [navScrolled, setNavScrolled] = useState(false);
	const navRef = useRef(null);

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			const offset = 0; // La cantidad de píxeles desde la parte superior para activar el cambio de estilo

			if (scrollPosition > offset) {
				setNavScrolled(true);
			} else {
				setNavScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<nav
			className={`${navScrolled ? "--scrolled" : ""}`}
			ref={navRef}>
			<img
				src={Logo}
				alt="Logo Guardianes de la Naturaleza"
			/>
			<div className="nav__right">
				<a href="#">Problemática</a>
				<a href="#">Colaboración</a>
				<a href="#">Especies</a>
				<a
					className="link-button"
					href="https://www.iucncontributionsfornature.org/"
					target="_blank">
					Únete a la misión
				</a>
			</div>
		</nav>
	);
}

export default Nav;
