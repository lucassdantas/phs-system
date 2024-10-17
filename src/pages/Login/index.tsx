import { useAuth } from "@/hooks/UseAuth";
import { LoginForm } from "./LoginForm";
import { Template } from "@/components/Template";

export const Login = () => {
  const { login }: { login: (data: { username: string, password:string }) => Promise<void> } = useAuth();
  const handleLogin = async (username: string, password: string) => {
    try {
      await login({ username, password });
    } catch (error) {
      console.error("Login error:", error);
      alert("Invalid username or password");
    }
  };

  return (
    <Template pageTitle="Login">
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
          <LoginForm onSubmit={handleLogin} />
          <div className="text-center mt-4">
            <a href="#" className="text-blue-500 hover:underline">
              Esqueceu sua senha?
            </a>
          </div>
        </div>
      </div>
    </Template>
  );
};
