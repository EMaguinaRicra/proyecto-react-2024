import axios from "axios";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigation = useNavigate();

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const submit = (e) => {
    e.preventDefault();
    setLoading(true); // Cuando se envía el formulario empieza el Loading
    setError(null); // Avisa al usuario que se ha vuelto a enviar la petición
    axios
      // se usa una vez y no se usa una variable de entorno como en la API de Cryptos
      // Usar los datos de prueba de la API
      .post(`https://reqres.in/api/login`, user)
      .then((data) => {
        setLoading(false); // Cuando se termina el formulario termina el Loading
        localStorage.setItem("tokenEDMarket", data.data.token);
        navigation("/");
      })
      .catch((e) => {
        setLoading(false); // Cuando se envía el formulario empieza el Loading
        console.error(e);
        setError(e.response.data.error); // Setea especificamente el error
      });
  };

  if (localStorage.getItem("tokenEDMarket")) return <Navigate to="/" />;

  // La API devuelve un token, pero esto se trabaja con una aplicación del BackEnd
  return (
    <>
      <div className="container">
        <div className="loginContainer">
          <h1>Iniciar Sesión</h1>
          <form onSubmit={submit}>
            <div className="field">
              <label htmlFor="email">Correo:</label>
              <input
                required
                onChange={(e) => {
                  setUser({
                    ...user,
                    email: e.target.value,
                  });
                }}
                type="email"
                name="email"
              />
            </div>
            <div className="field">
              <label htmlFor="password">Contraseña</label>
              <input
                required
                onChange={(e) => {
                  setUser({
                    ...user,
                    password: e.target.value,
                  });
                }}
                type="password"
                name="password"
              />
            </div>
            <div className="submit">
              <input
                type="submit"
                value={loading ? "Cargando..." : "Ingresar"}
                disabled={loading ? true : false}
              />
            </div>
          </form>

          {error && (
            <span className="error">
              Error:
              {
                error // Imprime el error que se seteo arriba en el useState
              }
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
