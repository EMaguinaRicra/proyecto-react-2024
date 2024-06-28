import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Welcome to EDmarket</h1>
      <p className="info">Conocer las Cryptos más usadas</p>
      <Link to={"/Cryptos"}>Ver Cryptos</Link>
    </>
  );
};

export default Home;
