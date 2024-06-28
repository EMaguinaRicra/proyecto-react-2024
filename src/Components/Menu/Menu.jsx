import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <nav className="mainMenu">
        <ul>
          <li>
            <NavLink to={"/"}>Inicio</NavLink>
          </li>
          <li>
            <NavLink to={"/Cryptos"}>Lista de Cryptos</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
