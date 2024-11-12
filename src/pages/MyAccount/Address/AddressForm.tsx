import { useState } from "react";

const handleChangeUserData = async (firstName: string, lastName: string) => {
  try {
    //await changeUserData({ firstName, lastName });
  } catch (error) {
    console.error("Login error:", error);
    alert("Algo está errado");
  }
};

export const AddressForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleChangeUserData(firstName, lastName);
  };

  return (
    <form onSubmit={handleSubmit} className='w-full my-4'>
      <fieldset className="flex justify-between gap-4">
        <div className="mb-6 w-[50%]">
          <label htmlFor="address" className="block text-sm ">Endereço</label>
          <input
            id="address"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 ffocus:ring-light-blue-phs-system focus:border-transparent"
            placeholder="Endereço"
          />
        </div>
        <div className="mb-6 w-[25%]">
          <label htmlFor="number" className="block text-sm font-medium">Número</label>
          <input
            id="number"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 ffocus:ring-light-blue-phs-system focus:border-transparent"
            placeholder="Número"
          />
        </div>
        <div className="mb-6 w-[25%]">
          <label htmlFor="cep" className="block text-sm font-medium">CEP</label>
          <input
            id="cep"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 ffocus:ring-light-blue-phs-system focus:border-transparent"
            placeholder="CEP"
          />
        </div>
      </fieldset>
      <fieldset className="flex justify-between gap-4">
        <div className="mb-6 w-[25%]">
          <label htmlFor="neighborhood" className="block text-sm font-medium">Bairro</label>
          <input
            id="neighborhood"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-light-blue-phs-system focus:border-transparent"
            placeholder="CEP"
          />
        </div>
        <div className="mb-6 w-[25%]">
          <label htmlFor="city" className="block text-sm font-medium">Cidade</label>
          <input
            id="city"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-light-blue-phs-system focus:border-transparent"
            placeholder="CEP"
          />
        </div>
        <div className="mb-6 w-[25%]">
          <label htmlFor="state" className="block text-sm font-medium">Estado</label>
          <input
            id="state"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-light-blue-phs-system focus:border-transparent"
            placeholder="CEP"
          />
        </div>
        <div className="mb-6 w-[25%]">
          <label htmlFor="country" className="block text-sm font-medium">País</label>
          <input
            id="country"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-light-blue-phs-system focus:border-transparent"
            placeholder="CEP"
          />
        </div>
      </fieldset>
      <button type="submit" className="p-4 bg-medium-blue-phs-system text-white py-2 rounded-full hover:bg-medium-green-phs-system transition-colors">
        Salvar
      </button>
    </form>
  );
};
