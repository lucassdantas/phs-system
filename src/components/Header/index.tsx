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
            <img src={logo} alt="PHS Logo" className="h-10" />
          </div>

          <button onClick={toggleMenu} className="text-2xl text-gray-700 lg:hidden">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <NavMenu /> {/* Substituindo a navegação pelo componente NavMenu */}

          <div className="hidden lg:block">
            <LoginAndRegisterButtons />
          </div>
        </div>

        {isMenuOpen && (
          <MobileMenu onClose={toggleMenu}>
            <nav className="flex flex-col items-center space-y-4 py-4">
              <Link to="/admin" className="text-gray-700 hover:text-light-blue-phs-system">
                Área administrativa
              </Link>
              <Link to="/aulas" className="text-gray-700 hover:text-light-blue-phs-system">
                Aulas
              </Link>
              <Link to="/login" className="text-gray-700 hover:text-light-blue-phs-system">
                Login
              </Link>
              <LoginAndRegisterButtons />
            </nav>
          </MobileMenu>
        )}
      </Limiter>
    </header>
  );
};
