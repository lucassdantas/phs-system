import React from 'react';
import { Link } from 'react-router-dom';
import DropdownMenu from './DropdownMenu'; // Importe o componente DropdownMenu

const NavMenu: React.FC = () => {
  return (
    <nav className="hidden lg:flex space-x-8">
      <Link to="/admin" className="text-gray-700 hover:text-light-blue-phs-system">
        Área administrativa
      </Link>
      <DropdownMenu /> 
      <Link to="/minha-conta" className="text-gray-700 hover:text-light-blue-phs-system">
        Minha conta
      </Link>
    </nav>
  );
};

export default NavMenu;
