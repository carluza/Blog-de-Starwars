import React, { useContext } from "react";
import { StarWarsContext } from "../context/StarWarsContext";
import { Link } from "react-router-dom";

export const Card = ({ src, title, id, category }) => {
  const { addFavorites } = useContext(StarWarsContext);

  if (!id || !category) {
    console.error(" Error: ID o categoría no definidos:", { id, category });
    return null;
  }

  return (
    <div className="col-12 col-sm-12 col-md-6 col-lg-4">
      <div className="card m-1">
        <img src={src} alt={title} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>

          <Link
            to={`/details/${category.toLowerCase()}/${id}`}
            className="btn btn-primary mx-1"
            onClick={(e) =>
              console.log(`🔗 Navigating to: /details/${category}/${id}`)
            }
          >
            View details
          </Link>

          <button
            className="btn btn-primary"
            onClick={() => addFavorites(title)}
          >
            <i className="fa-solid fa-cart-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
