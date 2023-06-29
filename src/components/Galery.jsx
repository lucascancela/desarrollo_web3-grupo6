import { useState, useEffect } from "react";
import "./Galery.css";

function Galery() {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch("http://localhost:3500/data")
            .then(res => res.json())
            .then(data => {
                setData(data);
                setLoading(true);
            });
    }, []);

    return (
        <div className="container">
            <h1>Galería de Animales</h1>
            <p>Selecciona la foto del animal para obtener más información</p>
        
            <div className="row">
                {
                    loading ? data?.map(animal => (
                        <div key={animal.id} className="col-3 divImg">
                            <a href="">
                                <img src={animal.img} alt={"Imagen de " + animal.nombre} />
                            </a>
                        </div>
                    )) : <h2>Cargando...</h2>
                }
            </div>
        </div>
    );
}

export default Galery;