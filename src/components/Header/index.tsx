'use client'
import { useState } from 'react';
import { Limiter } from '@/components/Limiter';
import { SuperHeader } from '@/components/Header/SuperHeader';
import { MobileMenu } from '@/components/Header/MobileMenu';
import { Button } from '@/components/Button';
import { useAuth } from '@/hooks/UseAuth';

export const Header = ({isHomepage=false}:{isHomepage?:boolean}) => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <header className="bg-white shadow-md">
      <SuperHeader />
      <Limiter className="py-2 lg:px-0 px-4">
        <div className="flex flex-col md:flex-row items-center relative">
          
          <div className="flex items-center justify-between md:w-1/3 w-full ">
           
        
          </div>

          <div className="hidden w-2/3 md:flex flex-grow items-center md:justify-center justify-end font-bold">
            <ul className="flex gap-4 text-black text-xl">
            
            </ul>
          </div>

          <MobileMenu toggleMenu={toggleMenu} isMenuOpen={isMenuOpen}/>

          <div className="hidden lg:flex items-center w-full md:w-1/5 justify-center md:justify-end"  onClick={() => handleLogout()}>
            <Button fontSize="sm" />
          </div>
        </div>
      </Limiter>
    </header>
  );
};
