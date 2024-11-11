import { useAuth } from "@/hooks/UseAuth";
import { Template } from '@/components/Template';
import { Section } from '@/components/Section';
import { ReactNode, useState } from "react";
import { Lessons } from "@/pages/Lessons";
import { Profile } from "@/pages/MyAccount/Profile";
import { Address } from "@/pages/MyAccount/Address";
import { Orders } from "@/pages/MyAccount/Orders";
import { BiUser } from "react-icons/bi";
import { TbUserSquare } from "react-icons/tb";
import { IoBag } from "react-icons/io5";
import { FaBookReader } from "react-icons/fa";

interface Tabs{
  icon:ReactNode;
  content:string;
}

export const MyAccount = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('Meus cursos');
  const handleLogout = () => {logout();};
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  const tabsAndIcons:Tabs[] = [
    {icon:<FaBookReader/>, content:'Meus cursos'},
    {icon:<BiUser/>, content:'Meu perfil'}, 
    {icon:<TbUserSquare/>, content:'Endereço'}, 
    {icon:<IoBag/>, content:'Meus pedidos'}
  ]
  return (
    <Template pageTitle='Minha conta'>
      <Section>
        <button onClick={handleLogout}>Logout</button>
        <div className="flex border-b gap-4 border-gray-200 w-full justify-between">
          {tabsAndIcons.map((tab:Tabs) => (
            <button key={tab.content} onClick={() => handleTabClick(tab.content)} className={`flex w-1/4 justify-center gap-4 items-center p-4 text-lg font-bold text-white rounded-full hover:bg-medium-green-phs-system ${activeTab === tab.content ? 'bg-medium-green-phs-system' : 'bg-light-blue-phs-system'} cursor-pointer transition duration-300 hover:scale-110`}>
              {tab.icon} {tab.content}
            </button>
          ))}
        </div>

        <div className="p-4">
          {activeTab === 'Meus cursos'  && <Lessons/> }
          {activeTab === 'Meu perfil'   && <Profile/> }
          {activeTab === 'Endereço'     && <Address/> }
          {activeTab === 'Meus pedidos' && <Orders/>  }
        </div>
      </Section>
    </Template>
  );
};
