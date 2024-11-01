import { useState } from 'react';
import { Limiter } from '@/components/Limiter';
import { MobileMenu } from '@/components/Header/MobileMenu';
import { useAuth } from '@/hooks/UseAuth';
import logo from '@/assets/logo-phs-system-fonte-cinza.png'
import { Link } from 'react-router-dom';

export const Header = ({isHomepage=false}:{isHomepage?:boolean}) => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <header className="bg-white shadow-md ">
      <Limiter className="py-2 lg:px-0 px-4">
        <div className='flex items-center justify-between p-4'>
          <div className="flex items-center">
          <img
            src={logo} 
            alt="PHS Logo"
            className="h-10"
          />
          </div>

          {/* Links de navegação */}
          <nav className="flex space-x-8">
            <Link to="/admin" className="text-gray-700 hover:text-light-blue-phs-system">
              Área administrativa
            </Link>
            <Link to="/aulas" className="text-gray-700 hover:text-light-blue-phs-system">
              Aulas
            </Link>
            <Link to="/login" className="text-gray-700 hover:text-light-blue-phs-system">
              Login
            </Link>
          </nav>

          {/* Botões */}
          <div className="flex space-x-4">
            <button className="px-4 py-2 text-light-blue-phs-system border border-light-blue-phs-system rounded-full hover:bg-blue-100">
              Login
            </button>
            <button className="px-4 py-2 text-white bg-dark-blue-phs-system rounded-full hover:bg-light-blue-phs-system">
              Cadastrar-se
            </button>
          </div>
        </div>
      </Limiter>
    </header>
  );
};