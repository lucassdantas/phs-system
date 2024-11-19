import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa'; // Importando o ícone de setinha

interface DropdrownMenuProps{
  dropdownMenu:{
    mainMenu:{
      route:string;
      content:string;
    };
    dropdownItems:{
      route:string;
      content:string;
    }[] 
  };
}
const DropdownMenu = ({dropdownMenu}:DropdrownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
      <span className="text-gray-700 hover:text-light-blue-phs-system flex items-center" > <Link to={dropdownMenu.mainMenu.route}>{dropdownMenu.mainMenu.content}</Link> <FaChevronDown className="ml-1 text-xs" /> </span>
      {isOpen && (
        <div className="absolute z-20 py-2 w-48 bg-white shadow-lg rounded-md">
          {dropdownMenu.dropdownItems.map((item, i) => (
            <Link key={i} to={item.route} className="block px-4 py-2 text-gray-700 hover:bg-gray-200">{item.content}</Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
