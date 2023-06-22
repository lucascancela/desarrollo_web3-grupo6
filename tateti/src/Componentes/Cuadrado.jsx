function Cuadrado({valor, onClick}) {
    return (
        <button className="square" onClick={onClick}>
            {valor}
        </button>
    );
}

export default Cuadrado;