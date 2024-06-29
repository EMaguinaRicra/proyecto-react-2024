import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";

const PageCrypto = () => {
  const params = useParams();

  const API_URL = import.meta.env.VITE_API_URL;

  const [crypto, setCrypto] = useState({});
  const [history, setHistory] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}assets/${params.id}`)
      .then((data) => {
        setCrypto(data.data.data);
      })
      .catch((e) => console.error(e));

    axios
      .get(`${API_URL}assets/${params.id}/history?interval=d1`)
      .then((data) => {
        setHistory(data.data.data);
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <>
      <h1>Page of Crypto: {crypto.name}</h1>

      <div className="table">
        <ul>
          <li>
            <span className="info label">Nombre: </span>{" "}
            <span className="info">{crypto.name}</span>
          </li>
          <li>
            <span className="info label">Sìmbolo: </span>{" "}
            <span className="info">{crypto.symbol}</span>
          </li>
        </ul>
      </div>

      <h2 className="info">Hisotiral</h2>
      <p className="info">Historial de la criptomoneda</p>

      <table className="info">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {history.map(({ date, priceUsd, time }) => (
            <tr key={time}>
              <td>{dayjs(date).format("DD/MM/YYYY")}</td>
              <td>{parseFloat(priceUsd).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default PageCrypto;
