// eslint-disable-next-line react/prop-types
function Crypto({ id, name, priceUsd, changePercent24Hr, symbol }) {
  return (
    <>
      <div className="cardCrypto">
        <h2>{name}</h2>
        <div key={id}>
          <span className="info">Precio: </span>
          <span>{parseFloat(priceUsd).toFixed(2)} $ </span>
          <br />
          <span className="info">Variación: </span>
          <span
            className={
              changePercent24Hr > 0 ? "positiveChange" : "negativeChange"
            }
          >
            {parseFloat(changePercent24Hr).toFixed(2)} %{" "}
          </span>
          <br />
          <span className="info">Código: </span>
          <span>{symbol}</span>
        </div>
      </div>
    </>
  );
}

export default Crypto;
