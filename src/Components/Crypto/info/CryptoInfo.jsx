import { parseFloatNumber } from "../../../helpers/numbers";

/* eslint-disable react/prop-types */
const CryptoInfo = ({ crypto }) => {
  return (
    <>
      {crypto && (
        <div className="info">
          <div className="main-info">
            <span className="rank">Ranking: {crypto.rank}</span>
            <h1>{crypto.name}</h1>
            <span className="symbol">{crypto.symbol}</span>
          </div>
          <div className="details">
            <ul>
              <li className="detail">
                <span className="label">Precio: </span>
                <span>{parseFloatNumber(crypto.priceUsd, 2)}</span>
              </li>
              <li className="detail">
                <span className="label">Max Supply: </span>
                <span>{parseFloatNumber(crypto.maxSupply, 3)}</span>
              </li>
              <li className="detail">
                <span className="label">Market Cap (USD): </span>
                <span>{parseFloatNumber(crypto.marketCapUsd, 3)}</span>
              </li>
              <li className="detail">
                <span className={"label"}>Volumen (USD - 24 Hrs.): </span>
                <span>{parseFloatNumber(crypto.volumeUsd24Hr, 3)}</span>
              </li>
              <li className="detail">
                <span className="label">Variación (24 Hrs.): </span>
                <span>{parseFloatNumber(crypto.changePercent24Hr, 2)}</span>
              </li>
              <li className="detail">
                <span className="label">Vwap 24Hrs.: </span>
                <span>{parseFloatNumber(crypto.vwap24Hr, 3)}</span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default CryptoInfo;
