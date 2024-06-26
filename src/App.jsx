import "./App.css";
import GridCrypto from "./Components/GridCrypto";

// Función para recibir la información de la API con un fetch, que es una promesa
function App() {
  return (
    <>
      <h1>Lista de Criptomonedas</h1>
      <GridCrypto />
    </>
  );
}

export default App;
