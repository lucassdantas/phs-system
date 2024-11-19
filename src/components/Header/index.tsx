import { useState } from 'react';
import { Limiter } from '@/components/Limiter';
import { MobileMenu } from '@/components/Header/MobileMenu';
import { useAuth } from '@/hooks/UseAuth';
import logo from '@/assets/logo-phs-system-fonte-cinza.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { LoginAndRegisterButtons } from '@/components/Header/MyAccountButton';
import NavMenu from './NavMenu'; // Importar o NavMenu
import { Link } from 'react-router-dom';

export const Header = ({ isHomepage = false }: { isHomepage?: boolean }) => {
  const { logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-md">
      <Limiter className="py-2 lg:px-0 px-4">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center">
            <img src={logo} alt="PHS Logo" className="w-[112px] object-fit" />
          </div>

          <button onClick={toggleMenu} className="text-2xl text-gray-700 lg:hidden">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <div className="hidden lg:block">
            <NavMenu />
          </div>

          <div className="hidden lg:block">
            <LoginAndRegisterButtons />
          </div>
        </div>

        {isMenuOpen && (
          <MobileMenu onClose={toggleMenu}>
            <NavMenu/>
          </MobileMenu>
        )}
      </Limiter>
    </header>
  );
};
