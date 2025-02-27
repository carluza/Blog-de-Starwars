import React, { useContext } from "react";
import { Card } from "../components/Card";
import { NavBar } from "../components/navbar";
import { StarWarsContext } from "../context/StarWarsContext";
import "../styles/styles.css";

export const Vehicles = () => {
  const { vehicles } = useContext(StarWarsContext);

  const vehicleImages = {
    "Sand Crawler": "/img/sandCrawler.png",
    "X-34 landspeeder": "/img/x34.png",
    "T-16 skyhopper": "/img/t16.png",
    "TIE Fighter": "/img/tie.png",
    Snowspeeder: "/img/snows.png",
    "AT-AT": "/img/at.png",
    "TIE/LN starfighter": "/img/tie.png",
    "TIE bomber": "/img/tieb.png",
    "AT-ST": "/img/atst.png",
    "Storm IV Twin-Pod cloud car": "/img/storm.png",
    "Sail barge": "/img/sail.png",
  };

  return (
    <>
      <NavBar />
      <div className="row mx-1 my-1">
        {vehicles.length > 0 ? (
          vehicles.map((vehicle) => (
            <Card
              key={vehicle.uid}
              id={vehicle.uid || "N/A"}
              category="vehicles"
              src={vehicleImages[vehicle.name] || "/img/default.png"}
              title={vehicle.name || "Cargando..."}
            />
          ))
        ) : (
          <p>Cargando vehículos...</p>
        )}
      </div>
    </>
  );
};
