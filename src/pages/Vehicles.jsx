import React, { useContext } from "react";
import { Card } from "../components/Card";
import { NavBar } from "../components/NavBar";
import { StarWarsContext } from "../context/StarWarsContext";
import "../styles/styles.css";

// Importa imágenes desde la carpeta assets si están en src
import sandCrawler from "../img/sandCrawler.png";
import x34 from "../img/x34.png";
import t16 from "../img/t16.png";
import tie from "../img/tie.png";
import snows from "../img/snows.png";
import at from "../img/at.png";
import tieb from "../img/tieb.png";
import atst from "../img/atst.png";
import storm from "../img/storm.png";
import sail from "../img/sail.png";

export const Vehicles = () => {
  const { vehicles } = useContext(StarWarsContext);

  const vehicleImages = {
    "Sand Crawler": sandCrawler,
    "X-34 landspeeder": x34,
    "T-16 skyhopper": t16,
    "TIE Fighter": tie,
    Snowspeeder: snows,
    "AT-AT": at,
    "TIE/LN starfighter": tie,
    "TIE bomber": tieb,
    "AT-ST": atst,
    "Storm IV Twin-Pod cloud car": storm,
    "Sail barge": sail,
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
              src={vehicleImages[vehicle.name] || defaultImage}
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
