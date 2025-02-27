import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/styles.css";

export const Details = () => {
  const { category, id } = useParams();
  const [detail, setDetail] = useState(null);
  const [error, setError] = useState(null);

  console.log("Params:", { category, id });

  useEffect(() => {
    if (!category || !id) {
      setError("Categoría o ID inválido");
      return;
    }

    const fetchDetail = async () => {
      const url = `https://www.swapi.tech/api/${category}/${id}`;
      console.log("🔍 Fetching URL:", url);

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();

        if (!data.result) {
          throw new Error("Datos no encontrados en la API");
        }

        setDetail(data.result.properties);
      } catch (error) {
        console.error("Error fetching details:", error);
        setError(error.message);
      }
    };

    fetchDetail();
  }, [category, id]);

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  if (!detail) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="container mt-4">
      <h1>{detail.name}</h1>
      <p>
        <strong>Description:</strong>{" "}
        {detail.description || "No description available"}
      </p>
      <p>
        <strong>More info:</strong>
      </p>
      <ul>
        {Object.entries(detail).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>
    </div>
  );
};
