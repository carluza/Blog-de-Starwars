import React, { useContext } from "react";
import { Card } from "../components/Card";
import { NavBar } from "../components/NavBar";
import { StarWarsContext } from "../context/StarWarsContext";
import "../styles/styles.css";

import luke from "../img/luke.png";
import c3po from "../img/c3po.png";
import r2d2 from "../img/r2d2.png";
import darth from "../img/darth.png";
import leia from "../img/leia.png";
import owen from "../img/owen.png";
import beru from "../img/beru.png";
import r5d4 from "../img/r5d4.png";
import biggs from "../img/biggs.png";
import obiwan from "../img/obiwan.png";

const peopleImages = {
  "Luke Skywalker": luke,
  "C-3PO": c3po,
  "R2-D2": r2d2,
  "Darth Vader": darth,
  "Leia Organa": leia,
  "Owen Lars": owen,
  "Beru Whitesun lars": beru,
  "R5-D4": r5d4,
  "Biggs Darklighter": biggs,
  "Obi-Wan Kenobi": obiwan,
};

export const People = () => {
  const { people } = useContext(StarWarsContext);

  return (
    <>
      <NavBar />
      <div className="row mx-1 my-1">
        {people.length > 0 ? (
          people.map((person) => (
            <Card
              key={person.uid}
              id={person.uid || "N/A"}
              category="people"
              src={peopleImages[person.name] || defaultImage}
              title={person.name || "Cargando..."}
            />
          ))
        ) : (
          <p>Cargando personajes...</p>
        )}
      </div>
    </>
  );
};
