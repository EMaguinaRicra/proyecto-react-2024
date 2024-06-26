import { useEffect, useState } from "react";
import Crypto from "./Crypto";
import axios from "axios";

const GridCrypto = () => {
  const [cryptos, setCryptos] = useState([]);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    axios
      .get(`${API_URL}assets`)
      .then((data) => {
        setCryptos(data.data.data);
      })
      .catch(() => {
        console.error("Error en la petición");
      });
  }, [API_URL]);

  return (
    <>
      <div className="containerCryptos">
        {cryptos.map(({ id, name, priceUsd, changePercent24Hr, symbol }) => (
          <Crypto
            key={id}
            name={name}
            priceUsd={priceUsd}
            changePercent24Hr={changePercent24Hr}
            symbol={symbol}
          />
        ))}
      </div>
    </>
  );
};

export default GridCrypto;
