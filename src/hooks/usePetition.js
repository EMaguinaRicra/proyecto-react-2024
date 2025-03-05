import { useState, useEffect } from "react";
import axios from "axios";

const usePetition = (endpoint) => {
  const API_URL = import.meta.env.VITE_API_URL;

  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // Para manejar errores

  useEffect(() => {
    setLoading(true);
    setError(null); // Reiniciamos el error en cada petición

    axios
      .get(`${API_URL}${endpoint}`)
      .then((data) => {
        setData(data.data.data);
        setLoading(false);
      })
      .catch((e) => {
        setError(e); // Guardamos el error si ocurre
        console.error(e);
      })
      .finally(() => {
        setLoading(false); // Asegura que loading siempre se actualice
      });
  }, [API_URL, endpoint]);
  return [data, loading, error];
};

export default usePetition;
