import { useAuth } from "@/hooks/UseAuth";
import { Template } from '@/components/Template';
import { Section } from '@/components/Section';
import { useState } from "react";
import { Lessons } from "@/pages/Lessons";
import { Profile } from "@/pages/MyAccount/Profile";
import { Address } from "@/pages/MyAccount/Address";
import { Orders } from "@/pages/MyAccount/Orders";

export const MyAccount = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('Meus cursos');
  const handleLogout = () => {logout();};
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <Template pageTitle='Minha conta'>
      <Section>
        <button onClick={handleLogout}>Logout</button>
        <div className="flex border-b border-gray-200">
          {['Meus cursos', 'Meu perfil', 'Endereço', 'Meus pedidos'].map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === tab
                  ? 'border-b-2 border-blue-500 text-blue-500'
                  : 'text-gray-500 hover:text-blue-500'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="p-4">
          {activeTab === 'Meus cursos'  && <Lessons/>}
          {activeTab === 'Meu perfil'   && <Profile/>}
          {activeTab === 'Endereço'     && <Address/>}
          {activeTab === 'Meus pedidos' && <Orders/>}
        </div>
      </Section>
    </Template>
  );
};
