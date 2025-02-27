import { Routes, Route } from "react-router-dom";
import { StarWarsProvider } from "../context/StarWarsContext";
import { Home } from "../pages/Home";
import { People } from "../pages/People";
import { Planets } from "../pages/Planets";
import { Vehicles } from "../pages/Vehicles";
import { Details } from "../pages/Details";

export const App = () => {
  return (
    <StarWarsProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/People/" element={<People />} />
        <Route path="/Planets/" element={<Planets />} />
        <Route path="/Vehicles/" element={<Vehicles />} />
        <Route path="/details/:category/:id" element={<Details />} />
      </Routes>
    </StarWarsProvider>
  );
};
