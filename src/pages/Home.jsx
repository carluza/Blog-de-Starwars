import { NavBar } from "../components/NavBar";
import swImage from "../img/sw.png"; // Importa la imagen correctamente

export const Home = () => {
  return (
    <>
      <div className="container-fluid px-0">
        <div className="row">
          <div className="col-12">
            <NavBar />
            <h1 className="text-center">
              This is Star Wars page, add your favorites in other categories
            </h1>
            <img src={swImage} className="w-100" alt="Star Wars" />
          </div>
        </div>
      </div>
    </>
  );
};
