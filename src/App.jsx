import { useState } from "react";
import Galery from "./components/galery";
import InfoAnimal from "./components/InfoAnimal";

function App() {
  const [galery, setGalery] = useState(false);
  const [infoAnimal, setInfoAnimal] = useState(true);

  return (
    <>
      {
        infoAnimal ? (
          <>
            <button onClick={() => {
              setGalery(true);
              setInfoAnimal(false);
            }}>Galeria</button>
            < InfoAnimal />
          </>
        ) : ""
      }
      {
        galery ? (
          <>
            <button onClick={() => {
              setGalery(false);
              setInfoAnimal(true);
            }}>Info Animal</button>
            < Galery />
          </>
        ) : ""
      }
    </>
  );
}

export default App;