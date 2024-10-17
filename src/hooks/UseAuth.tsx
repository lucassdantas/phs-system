import { createContext, useContext, useMemo, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import axios from "axios";

type AuthProviderProps = {
  children: ReactNode;
};

type User = {
  username: string;
  // Adicione mais campos aqui se necessário
};

const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  // Tipar corretamente o user como User | null
  const [user, setUser] = useLocalStorage<User | null>("user", null);
  const [token, setToken] = useLocalStorage<string | null>("token", null); // Armazena o token JWT
  const navigate = useNavigate();

  // Função de login com tipagem adequada
  const login = async (data: { username: string; password: string }) => {
    try {
      // Faz a requisição de login para o backend
      const response = await axios.post("http://localhost/backend/login.php", {
        username: data.username,
        password: data.password,
      });
      // Recebe o token do backend
      const { token, username } = response.data;

      // Armazena o token no localStorage
      setToken(token);
      setUser({ username }); // Define o username corretamente no estado do user

      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
      alert("Invalid username or password");
    }
  };

  // Função de logout
  const logout = () => {
    setUser(null); // Remove o user
    setToken(null); // Remove o token
    navigate("/", { replace: true });
  };

  // Função para verificar se o usuário está logado
  const isAuthenticated = async () => {
    if (!token) return false;

    try {
      // Verifica o token com o backend
      const response = await axios.post("http://localhost/backend/verifyToken.php", {
        token,
      });

      // Se o token for válido, o backend retornará um status de sucesso
      return response.data.valid;
    } catch (error) {
      console.error("Token verification failed:", error);
      return false;
    }
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
      isAuthenticated,
    }),
    [user, token] // Dependências para o memo
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
