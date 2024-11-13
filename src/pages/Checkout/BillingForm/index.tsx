import { useState } from "react";

interface FormData {
  [key: string]: string; 
  firstName: string;
  lastName: string;
  birthDate: string;
  cpf: string;
  phone: string;
  email: string;
  zipCode: string;
  address: string;
  number: string;
  city: string;
  district: string;
  state: string;
  country: string;
}

const handleChangeUserData = async (formData: FormData) => {
  try {
    // await changeUserData(formData);
  } catch (error) {
    console.error("Login error:", error);
    alert("Algo está errado");
  }
};

export const BillingForm = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };
  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleChangeUserData(formData);
  };
  const fields = [
    { id: "firstName", label: "Primeiro Nome", type: "text", placeholder: "Primeiro Nome"},
    { id: "lastName", label: "Sobrenome", type: "text", placeholder: "Sobrenome" },
    { id: "birthDate", label: "Data de Nascimento", type: "date", placeholder: "" },
    { id: "cpf", label: "CPF", type: "text", placeholder: "CPF" },
    { id: "phone", label: "Telefone", type: "text", placeholder: "Telefone" },
    { id: "email", label: "Email", type: "email", placeholder: "Email" },
    { id: "zipCode", label: "CEP", type: "text", placeholder: "CEP" },
    { id: "address", label: "Endereço", type: "text", placeholder: "Endereço" },
    { id: "number", label: "Número", type: "text", placeholder: "Número" },
    { id: "city", label: "Cidade", type: "text", placeholder: "Cidade" },
    { id: "district", label: "Bairro", type: "text", placeholder: "Bairro" },
    { id: "state", label: "Estado", type: "text", placeholder: "Estado" },
    { id: "country", label: "País", type: "text", placeholder: "País" },
  ];

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    birthDate: "",
    cpf: "",
    phone: "",
    email: "",
    zipCode: "",
    address: "",
    number: "",
    city: "",
    district: "",
    state: "",
    country: "",
  });
  
  return (
    <form onSubmit={handleSubmit} className='w-full my-4'>
      <div className=' flex flex-wrap gap-x-4 gap-y-2 mb-4'>
        {fields.map((field, index) => (
          <div className="w-[48%]" key={index}>
            <label htmlFor={field.id}>{field.label}</label>
            <input
              id={field.id}
              type={field.type}
              value={formData[field.id]}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-light-blue-phs-system focus:border-transparent"
              placeholder={field.placeholder}
            />
          </div>
        ))}
      </div>
      <button type="submit" className="p-4 bg-medium-blue-phs-system text-white py-2 rounded-full hover:bg-medium-green-phs-system transition-colors">Salvar</button>
    </form>
  );
};
