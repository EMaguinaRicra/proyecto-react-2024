import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

// Función para recibir la información de la API con un fetch, que es una promesa
function App() {
  const [criptos, setCriptos] = useState([]);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    axios
      .get(`${API_URL}assets`)
      .then((data) => {
        setCriptos(data.data.data);
      })
      .catch(() => {
        console.error("La petición falló");
      });
  }, []);

  // Agregando un Loader
  if (!criptos) return <span>Cargando...</span>;

  // Al mapeo de "Criptos" se le añade id, para el identificador único del key.map, y también nombre y precio para imprimir en pantalla
  // Se destructura el criptos en id, name y priceUsd para no estar escribiendo criptos múltiples veces
  // Si el mapeo fuera cripto --- cripto.id, cripto.name y cripto.priceUsd

  return (
    <>
      <h1>Lista de Criptomonedas</h1>
      <ol>
        {criptos.map(({ id, name, priceUsd }) => (
          <li key={id}>
            Nombre: {name} Precio: {priceUsd}
          </li>
        ))}
      </ol>
    </>
  );
}

export default App;
