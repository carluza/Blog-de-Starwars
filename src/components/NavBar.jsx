import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StarWarsContext } from "../context/StarWarsContext";

export const NavBar = () => {
  const { favorites, removeFavorites } = useContext(StarWarsContext);

  return (
    <>
      <div className="navbar bg-body-secondary w-100 py-3">
        <div className="container d-flex">
          <span className="navbar-brand mb-0 h1">Star Wars Page</span>
          <Link to={"/"}>
            <button type="button" className="btn">
              <span className="navbar-brand mb-0 h1">Home</span>
            </button>
          </Link>
          <Link to={"/Planets/"}>
            <button type="button" className="btn">
              <span className="navbar-brand mb-0 h1">Planets</span>
            </button>
          </Link>
          <Link to={"/Vehicles/"}>
            <button type="button" className="btn">
              <span className="navbar-brand mb-0 h1">Vehicles</span>
            </button>
          </Link>
          <Link to={"/People/"}>
            <button type="button" className="btn">
              <span className="navbar-brand mb-0 h1">Peoples</span>
            </button>
          </Link>
          {/* btn mdodal */}
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <i className="fa-solid fa-cart-shopping"></i> ({favorites.length})
          </button>

          {/* modal */}
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Added items
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body d-flex align-items-center">
                  {favorites.length === 0 ? (
                    <p>No items added.</p>
                  ) : (
                    <ul className="list-group">
                      {favorites.map((item, index) => (
                        <li
                          key={index}
                          className="list-group-item d-flex justify-content-between align-items-center"
                        >
                          {item}
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => removeFavorites(index)}
                          >
                            <i className="fa-solid fa-trash"></i>
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
