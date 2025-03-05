import { createContext, useEffect, useState } from "react";

const UserContext = createContext();

// eslint-disable-next-line react/prop-types
const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser({
      name: "Eloy Maguina",
      registered: "04/03/2025",
    });
  }, []);

  return (
    <>
      <UserContext.Provider value={user}>{children}</UserContext.Provider>
    </>
  );
};

export { UserContext, UserContextProvider };
