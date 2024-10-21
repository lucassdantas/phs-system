'use client'
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
    <header className="bg-white shadow-md">
      <Limiter className="py-2 lg:px-0 px-4">
        <div className="flex flex-col md:flex-row items-center relative py-4">
          
          <div className="flex items-center justify-between md:w-1/3 w-full ">
           <img src={logo} alt='logotipo Phs System' className='w-[155px]'/>
        
          </div>

          <div className="hidden w-2/3 md:flex flex-grow items-center md:justify-center justify-end font-bold">
            <ul className="flex gap-4 text-black">
              <li><Link to='/'>Aulas</Link></li>
              <li><Link to='/minha-conta'>Minha conta</Link></li>
            </ul>
          </div>

          <MobileMenu toggleMenu={toggleMenu} isMenuOpen={isMenuOpen}/>

          <div className="hidden lg:flex items-center w-full md:w-1/5 justify-center md:justify-end cursor-pointer"  onClick={() => handleLogout()}>
            <span>Sair</span>
          </div>
        </div>
      </Limiter>
    </header>
  );
};
