import React, { useContext } from "react";
import { Card } from "../components/Card";
import { NavBar } from "../components/NavBar";
import { StarWarsContext } from "../context/StarWarsContext";
import "../styles/styles.css";

// Importamos las imágenes correctamente
import tatooine from "../img/tatooine.png";
import alderaan from "../img/alderaan.png";
import yavin from "../img/yavin.png";
import hoth from "../img/hoth.png";
import dagobah from "../img/dagobah.png";
import bespin from "../img/bespin.png";
import endor from "../img/endor.png";
import naboo from "../img/naboo.png";
import coruscant from "../img/coruscant.png";
import kamino from "../img/kamino.png";

export const Planets = () => {
  const { planets } = useContext(StarWarsContext);

  const planetImages = {
    Tatooine: tatooine,
    Alderaan: alderaan,
    "Yavin IV": yavin,
    Hoth: hoth,
    Dagobah: dagobah,
    Bespin: bespin,
    Endor: endor,
    Naboo: naboo,
    Coruscant: coruscant,
    Kamino: kamino,
  };

  return (
    <>
      <NavBar />
      <div className="row mx-1 my-1">
        {planets.length > 0 ? (
          planets.map((planet) => (
            <Card
              key={planet.uid}
              id={planet.uid || "N/A"}
              category="planets"
              src={planetImages[planet.name] || defaultImage}
              title={planet.name || "Cargando..."}
            />
          ))
        ) : (
          <p>Cargando planetas...</p>
        )}
      </div>
    </>
  );
};
