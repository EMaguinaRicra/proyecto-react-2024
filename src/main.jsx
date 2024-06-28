import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page404 from "./Components/404.jsx";
import App from "./Components/App.jsx";
import GridCrypto from "./Components/Crypto/GridCrypto.jsx";
import Home from "./Components/Home.jsx";
import PageCrypto from "./Components/Crypto/PageCrypto.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
      </Route>

      <Route path="/Cryptos" element={<App />}>
        <Route index element={<GridCrypto />} />
        <Route path=":id" element={<PageCrypto />}></Route>
      </Route>

      <Route path="*" element={<Page404 />} />
    </Routes>
  </BrowserRouter>
);
