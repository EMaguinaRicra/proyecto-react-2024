import { NavLink } from "react-router-dom";
import "./Menu.css";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Menu = () => {
  const user = useContext(UserContext);

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
          <li>
            <NavLink to={"/Perfil"}>Perfil de {user.name}</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
