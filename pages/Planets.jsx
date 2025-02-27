import React, { useContext } from "react";
import { Card } from "../components/Card";
import { NavBar } from "../components/navbar";
import { StarWarsContext } from "../context/StarWarsContext";
import "../styles/styles.css";

export const Planets = () => {
  const { planets } = useContext(StarWarsContext);
  const planetImages = {
    Tatooine: "/img/tatooine.png",
    Alderaan: "/img/alderaan.png",
    "Yavin IV": "/img/yavin.png",
    Hoth: "/img/hoth.png",
    Dagobah: "/img/dagobah.png",
    Bespin: "/img/bespin.png",
    Endor: "/img/endor.png",
    Naboo: "/img/naboo.png",
    Coruscant: "/img/coruscant.png",
    Kamino: "/img/kamino.png",
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
              src={planetImages[planet.name] || "/img/default.png"}
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
