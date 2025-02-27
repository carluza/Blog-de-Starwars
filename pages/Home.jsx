import { NavBar } from "../components/navbar";

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
            <img src="../img/sw.png" className="w-100" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
