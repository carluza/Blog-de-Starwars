import React, { useContext } from "react";
import { Card } from "../components/Card";
import { NavBar } from "../components/navbar";
import { StarWarsContext } from "../context/StarWarsContext";
import "../styles/styles.css";

const peopleImages = {
  "Luke Skywalker": "/img/luke.png",
  "C-3PO": "/img/c3po.png",
  "R2-D2": "/img/r2d2.png",
  "Darth Vader": "/img/darth.png",
  "Leia Organa": "/img/leia.png",
  "Owen Lars": "/img/owen.png",
  "Beru Whitesun lars": "/img/beru.png",
  "R5-D4": "/img/r5d4.png",
  "Biggs Darklighter": "/img/biggs.png",
  "Obi-Wan Kenobi": "/img/obiwan.png",
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
              src={peopleImages[person.name] || "/img/default.png"}
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
