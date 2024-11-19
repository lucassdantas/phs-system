import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa'; 

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
  const handleMenuOpenAndClose = () => setIsOpen(!isOpen);;

  return (
    <div className="relative" onMouseEnter={handleMenuOpenAndClose} onMouseLeave={handleMenuOpenAndClose} >
      <span className="text-gray-700 hover:text-light-blue-phs-system flex items-center" > <Link to={dropdownMenu.mainMenu.route}>{dropdownMenu.mainMenu.content}</Link> <FaChevronDown onClick={handleMenuOpenAndClose} className="ml-1 text-xs cursor-pointer" /> </span>
      {isOpen && (
        <div className="absolute z-20 py-2 w-48 bg-white shadow-lg rounded-md">
          {dropdownMenu.dropdownItems.map((submenu, i) => (<Link key={i} to={submenu.route} className="block px-4 py-2 text-gray-700 hover:bg-gray-200">{submenu.content}</Link>))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
