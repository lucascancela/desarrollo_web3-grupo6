import "./Redes.css";

function CompartirRedes({ textoCompartir }) {
	const compartirWhatsApp = () => {
		const textoEncoded = encodeURIComponent(textoCompartir);
		const url = `https://api.whatsapp.com/send?text=${textoEncoded}`;
		window.open(url, "_blank");
	};

	const compartirTwitter = () => {
		const textoEncoded = encodeURIComponent(textoCompartir);
		const url = `https://twitter.com/intent/tweet?text=${textoEncoded}`;
		window.open(url, "_blank");
	};

	return (
		<>
			<h3 className="social-titulo">¡Comparte tu experiencia!</h3>
			<div className="social">
				<button
					onClick={compartirWhatsApp}
					title="Enviar por Whatsapp"
					style={{ backgroundColor: "#2FCE4D" }}>
					<ion-icon name="logo-whatsapp"></ion-icon>
				</button>
				<button
					onClick={compartirTwitter}
					title="Crear un tweet"
					style={{ backgroundColor: "#1C93E4" }}>
					<ion-icon name="logo-twitter"></ion-icon>
				</button>
			</div>
		</>
	);
}

export default CompartirRedes;
