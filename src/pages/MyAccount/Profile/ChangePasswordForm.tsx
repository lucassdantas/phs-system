import { useState } from "react";

const handleChangePassword = async (password: string, confirmationPassword: string) => {
  try {
    //await changePassword({ password, confirmationPassword });
  } catch (error) {
    console.error("Login error:", error);
    alert("Invalid username or password");
  }
};

export const ChangePasswordForm = () => {
  const [password, setPassword] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleChangePassword(password, confirmationPassword);
  };

  return (
    <form onSubmit={handleSubmit} className='w-full my-4'>
      <fieldset className="flex justify-between gap-4">
        <div className="mb-4 w-1/2">
          <label htmlFor="password" className="block text-sm ">Nova senha:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Digite seu usuário"
          />
        </div>
        <div className="mb-6 w-1/2">
          <label htmlFor="confirmationPassowrd" className="block text-sm font-medium">Digite novamente sua nova senha:</label>
          <input
            id="confirmationPassword"
            type="password"
            value={password}
            onChange={(e) => setConfirmationPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Digite sua senha"
          />
        </div>
      </fieldset>
      <button type="submit" className="p-4 bg-medium-blue-phs-system text-white py-2 rounded-full hover:bg-medium-green-phs-system transition-colors">
        Salvar
      </button>
    </form>
  );
};
