import axios from "axios";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigation = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const submit = (e) => {
    e.preventDefault();
    axios
      // se usa una vez y no se usa una variable de entorno como en la API de Cryptos
      // Usar los datos de prueba de la API
      .post(`https://reqres.in/api/login`, user)
      .then((data) => {
        localStorage.setItem("tokenEDMarket", data.data.token);
        navigation("/");
      })
      .catch((e) => console.error(e));
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
              <input type="submit" value="Ingresar" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
