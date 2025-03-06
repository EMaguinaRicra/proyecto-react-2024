import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page404 from "./Components/404.jsx";
import App from "./Components/App.jsx";
import GridCrypto from "./Components/Crypto/GridCrypto.jsx";
import Home from "./Components/Home.jsx";
import PageCrypto from "./Components/Crypto/PageCrypto.jsx";
import Perfil from "./Components/Users/Perfil.jsx";
import { UserContextProvider } from "./context/UserContext.jsx";
import Login from "./Components/Users/Login.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="perfil" element={<Perfil />} />
        </Route>

        <Route path="/Cryptos" element={<App />}>
          <Route index element={<GridCrypto />} />
          <Route path=":id" element={<PageCrypto />}></Route>
        </Route>

        <Route path="/login" element={<Login />} />

        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  </UserContextProvider>
);
