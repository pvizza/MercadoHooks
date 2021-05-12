import { useCallback, useContext } from "react";
import Context from "../context/UserContext";

export default function useUser() {
  const { logged, setLogged } = useContext(Context);

  const login = useCallback(() => {
    setLogged(false);
  }, [setLogged]);

  const logout = useCallback(() => {
    setLogged(true);
  }, [setLogged]);

  return {
    isLogged: Boolean(logged),
    login,
    logout,
  };
}
