import { createContext, useEffect, useState } from "react";

export const StarWarsContext = createContext();

export const StarWarsProvider = ({ children }) => {
  const [vehicles, setVehicles] = useState([]);
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const urlVehicle = "https://www.swapi.tech/api/vehicles";
  const urlPeople = "https://www.swapi.tech/api/people";
  const urlPlanets = "https://www.swapi.tech/api/planets";

  const fetchApiVehicle = async () => {
    try {
      const response = await fetch(urlVehicle);
      if (response.ok) {
        const data = await response.json();
        setVehicles(data.results);
      }
    } catch (error) {
      console.log("Error al extraer la data de la api", error);
    }
  };

  const fetchApiPeople = async () => {
    try {
      const response = await fetch(urlPeople);
      if (response.ok) {
        const data = await response.json();
        setPeople(data.results);
      }
    } catch (error) {
      console.log("error to extract api", error);
    }
  };

  const fetchApiPlanets = async () => {
    try {
      const response = await fetch(urlPlanets);
      if (response.ok) {
        const data = await response.json();
        setPlanets(data.results);
      }
    } catch (error) {
      console.log("error to extract api", error);
    }
  };

  const addFavorites = (item) => {
    setFavorites((prevFavorites) => [...prevFavorites, item]);
  };

  const removeFavorites = (index) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((_, i) => i !== index)
    );
  };

  useEffect(() => {
    fetchApiVehicle();
    fetchApiPeople();
    fetchApiPlanets();
  }, []);

  return (
    <StarWarsContext.Provider
      value={{
        vehicles,
        people,
        planets,
        favorites,
        addFavorites,
        removeFavorites,
      }}
    >
      {children}
    </StarWarsContext.Provider>
  );
};
