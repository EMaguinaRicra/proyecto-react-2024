import { useParams } from "react-router-dom";
import "./PageCrypto.css";
import CryptoInfo from "./info/CryptoInfo";
import CryptoHistory from "./info/CryptoHistory";
import usePetition from "../../hooks/usePetition";

const PageCrypto = () => {
  const params = useParams();
  const [cryptoData, loadingCrypto, errorCrypto] = usePetition(
    `assets/${params.id}`
  );
  const [historyData, loadingHistory, errorHistory] = usePetition(
    `assets/${params.id}/history?interval=d1`
  );

  if (loadingCrypto || loadingHistory)
    return (
      <>
        <span>Loading...</span>
        <span>{errorHistory}</span>
        <span>{errorCrypto}</span>
      </>
    );

  return (
    <>
      <div className="crypto-page-container">
        {cryptoData && <CryptoInfo crypto={cryptoData} />}
        {historyData && <CryptoHistory history={historyData} />}
      </div>
    </>
  );
};

export default PageCrypto;
