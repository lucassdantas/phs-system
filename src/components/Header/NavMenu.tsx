import { Link } from 'react-router-dom';
import { adminDropdownMenu, lessonsDropdownMenu } from '@/components/Header/utils/menus';
import DropdownMenu from './DropdownMenu';
import { useAuth } from '@/hooks/UseAuth';

const NavMenu = () => {
  const { user } = useAuth();
  return (
    <nav className="lg:flex lg:flex-row lg:space-y-0 lg:py-0 lg:space-x-8 flex-col items-start py-4">
      { user.user_role==='admin' && <DropdownMenu dropdownMenu={adminDropdownMenu}/> }
      <DropdownMenu dropdownMenu={lessonsDropdownMenu}/> 
      <Link to="/minha-conta" className="text-gray-700 hover:text-light-blue-phs-system">Minha conta</Link>
    </nav>
  );
};

export default NavMenu;
