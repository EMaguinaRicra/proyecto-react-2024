import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Perfil = () => {
  const user = useContext(UserContext);

  return (
    <div>
      <h1>Perfil de {user.name}</h1>
      <div>Usuario desde: {user.registered}</div>
    </div>
  );
};

export default Perfil;
