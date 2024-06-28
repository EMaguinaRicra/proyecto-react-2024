import { Outlet } from "react-router-dom";
import "./App.css";
import Menu from "./Menu/Menu";

function App() {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  );
}

export default App;
