import React from 'react';
import { Link } from 'react-router-dom';
import DropdownMenu from './DropdownMenu'; // Importe o componente DropdownMenu

const NavMenu: React.FC = () => {
  const lessonsDropdownMenuItems = [
    {route:'/aulas/fase1', content:'Fase 1'},
    {route:'/aulas/fase2', content:'Fase 2'},
  ]
  return (
    <nav className="hidden lg:flex space-x-8">
      <Link to="/admin" className="text-gray-700 hover:text-light-blue-phs-system">
        Área administrativa
      </Link>
      <DropdownMenu dropdownItems={lessonsDropdownMenuItems}/> 
      <Link to="/minha-conta" className="text-gray-700 hover:text-light-blue-phs-system">
        Minha conta
      </Link>
    </nav>
  );
};

export default NavMenu;
