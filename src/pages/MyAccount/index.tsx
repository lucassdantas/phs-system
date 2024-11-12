import { useAuth } from "@/hooks/UseAuth";
import { Template } from '@/components/Template';
import { Section } from '@/components/Section';
import { ReactNode, useState } from "react";
import { BiUser } from "react-icons/bi";
import { TbUserSquare } from "react-icons/tb";
import { IoBag } from "react-icons/io5";
import { FaBookReader } from "react-icons/fa";
import { IoMdExit } from "react-icons/io";
import { Lessons } from "@/pages/MyAccount/Lessons";
import { Profile } from "@/pages/MyAccount/Profile";
import { Address } from "@/pages/MyAccount/Address";
import { Orders } from "@/pages/MyAccount/Orders";

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
        <div className="flex lg:flex-row flex-col gap-4 border-gray-200 w-full justify-between pt-12 pb-6">
          {tabsAndIcons.map((tab:Tabs) => (
            <button key={tab.content} onClick={() => handleTabClick(tab.content)} className={`flex w-1/4 justify-center gap-4 items-center p-4 text-lg font-bold text-white rounded-full hover:bg-medium-green-phs-system ${activeTab === tab.content ? 'bg-medium-green-phs-system' : 'bg-medium-blue-phs-system'} cursor-pointer transition duration-300 hover:scale-110`}>
              {tab.icon} {tab.content}
            </button>
          ))}
        </div>

        <div className="w-full flex justify-between items-center">
          <h2 className='font-bold text-2xl'>{activeTab}</h2>
          <button onClick={handleLogout} className={`flex justify-center gap-4 items-center py-2 px-6 text-lg  text-white rounded-full bg-medium-blue-phs-system hover:bg-red-700 cursor-pointer transition duration-300 hover:scale-110`}>
            <IoMdExit fontWeight={20} className='font-bold'/> Sair
          </button>
        </div>

        <div className="p-4 border-t border-medium-green-phs-system mt-4">
          {activeTab === 'Meus cursos'  && <Lessons/> }
          {activeTab === 'Meu perfil'   && <Profile/> }
          {activeTab === 'Endereço'     && <Address/> }
          {activeTab === 'Meus pedidos' && <Orders/>  }
        </div>
      </Section>
    </Template>
  );
};
