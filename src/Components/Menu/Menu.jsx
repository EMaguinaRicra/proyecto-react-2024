import { NavLink, useNavigate } from "react-router-dom";
import "./Menu.css";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Menu = () => {
  const user = useContext(UserContext);

  const navigation = useNavigate();

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
          <li>
            <a
              onClick={() => {
                localStorage.removeItem("tokenEDMarket");
                navigation("/login");
              }}
            >
              Cerar Sesión
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
