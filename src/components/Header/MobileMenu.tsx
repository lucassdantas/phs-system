import React from 'react'

interface mobileButtonProps{
  isMenuOpen:boolean;
  toggleMenu:any;
}
export const MobileMenu = ({isMenuOpen, toggleMenu}:mobileButtonProps) => {
  return (
    <div className={`fixed top-0 left-0 w-full bg-white shadow-lg transition-transform transform ${isMenuOpen ? 'translate-y-[90px]' : '-translate-y-full'} md:hidden`}>
      <div className="flex flex-col items-center justify-center h-full">
        <ul className="flex flex-col gap-4 text-black text-xl">
          <li className="hover:scale-110 transition duration-300">
            <a href="#sobre" onClick={toggleMenu}>Sobre nós</a>
          </li>
          <li className="hover:scale-110 transition duration-300">
            <a href="#servicos" onClick={toggleMenu}>Serviços</a>
          </li>
          <li className="hover:scale-110 transition duration-300">
            <a href="#contato" onClick={toggleMenu}>Fale conosco</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
