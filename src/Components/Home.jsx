import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="mainContainer">
        <h1>Welcome to EDmarket</h1>
        <p className="subTitle">Conocer las 100 Cryptos más usadas</p>

        <Link to={"/Cryptos"} className="link">
          Ver Cryptos
        </Link>
      </div>
    </>
  );
};

export default Home;
