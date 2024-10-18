import { createContext, useContext, useMemo, ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import axios from "axios";
import { backendUrl } from "@/utils/constants/siteInfos";

type AuthProviderProps = {
  children: ReactNode;
};

type User = {
  username: string;
  // Adicione mais campos aqui se necessário
};

const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useLocalStorage<User | null>("user", null);
  const [token, setToken] = useLocalStorage<string | null>("token", null);
  const navigate = useNavigate();

  const login = async (data: { username: string; password: string }) => {
    try {
      const response = await axios.post(`${backendUrl}/login.php`, {
        username: data.username,
        password: data.password,
      });
      const { token, username } = response.data;

      setToken(token);
      setUser({ username });
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
      alert("Invalid username or password");
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    navigate("/login", { replace: true });
  };

  const isAuthenticated = async () => {
    if (!token) return false;

    try {
      const response = await axios.post(`${backendUrl}/verifyToken.php`, {
        token,
      });
      console.log(response)
      return response.data.valid;
    } catch (error) {
      console.error("Token verification failed:", error);
      return false;
    }
  };

  // Verifica a autenticidade do token ao carregar a aplicação
  useEffect(() => {
    const checkAuthentication = async () => {
      const valid = await isAuthenticated();
      if (!valid) {
        logout(); // Chama o logout se o token não for válido
        navigate("/login"); // Redireciona para a página de login
      }
    };

    checkAuthentication();
  }, [token, navigate]);

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
      isAuthenticated,
    }),
    [user, token]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
