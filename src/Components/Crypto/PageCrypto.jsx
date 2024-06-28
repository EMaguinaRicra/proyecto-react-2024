import { useParams } from "react-router-dom";

const PageCrypto = () => {
  const params = useParams();

  return (
    <>
      <h1>PageCrypto</h1>
      <p className="info">Im the Crypto {params.id} </p>
    </>
  );
};

export default PageCrypto;
