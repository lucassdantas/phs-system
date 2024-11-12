import { useAuth } from "@/hooks/UseAuth";
import { LoginForm } from "./LoginForm";
import { Template } from "@/components/Template";
import { Section } from "@/components/Section";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
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
    <>
      <main className={`bg-[url('assets/images/fundo-equipe-phs-system-sem-logo-banner-desktop.jpg')] bg-cover bg-center bg-no-repeat`}>
        <Section>
          <div className="flex flex-col items-start justify-center  p-8 rounded-lg shadow-lg w-full max-w-md min-h-[85vh]">
            <h2 className="text-3xl font-semibold text-center mb-6 text-white">Faça login</h2>
            <p className='text-medium-green-phs-system mb-6'>Não tem conta? <Link to='/register'>Cadastre-se</Link></p>
            <LoginForm onSubmit={handleLogin} />
            <div className="text-center mt-4">
              <a href="#" className="text-blue-500 hover:underline">Esqueceu sua senha?</a>
            </div>
          </div>

        </Section>
      </main>
      <Footer/>
    </>
  );
};
