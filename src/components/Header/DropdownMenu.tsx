import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa'; // Importando o ícone de setinha

const DropdownMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
      <button className="text-gray-700 hover:text-light-blue-phs-system flex items-center" > <Link to='/aulas'>Aulas</Link> <FaChevronDown className="ml-1 text-xs" /> </button>
      {isOpen && (
        <div className="absolute z-20 py-2 w-48 bg-white shadow-lg rounded-md"   >
          <Link to="/aulas/fase1" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Fase 1</Link>
          <Link to="/aulas/fase2" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Fase 2</Link>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
