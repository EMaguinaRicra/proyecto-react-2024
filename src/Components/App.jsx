import { Navigate, Outlet } from "react-router-dom";
import "./App.css";
import Menu from "./Menu/Menu";

function App() {
  if (!localStorage.getItem("tokenEDMarket")) return <Navigate to="/login" />;

  return (
    <>
      <Menu />
      <Outlet />
    </>
  );
}

export default App;
