import { useState } from "react";

const handleChangeUserData = async (firstName: string, lastName: string) => {
  try {
    //await changeUserData({ firstName, lastName });
  } catch (error) {
    console.error("Login error:", error);
    alert("Algo está errado");
  }
};

export const ChangeUserDataForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleChangeUserData(firstName, lastName);
  };

  return (
    <form onSubmit={handleSubmit} className='w-full my-4'>
      <fieldset className="flex justify-between gap-4">
        <div className="mb-4 w-1/2">
          <label htmlFor="firstName" className="block text-sm ">Nome</label>
          <input
            id="firstName"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-light-blue-phs-system focus:border-transparent"
            placeholder="Digite seu nome"
          />
        </div>
        <div className="mb-6 w-1/2">
          <label htmlFor="lastName" className="block text-sm font-medium">Sobrenome</label>
          <input
            id="lastName"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-light-blue-phs-system focus:border-transparent"
            placeholder="Digite seu sobrenome"
          />
        </div>
      </fieldset>
      <button type="submit" className="p-4 bg-medium-blue-phs-system text-white py-2 rounded-full hover:bg-medium-green-phs-system transition-colors">
        Salvar
      </button>
    </form>
  );
};
