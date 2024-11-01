import { ReactNode, useEffect } from 'react';

interface MobileMenuProps {
  children: ReactNode;
  onClose: () => void;
}

export const MobileMenu = ({ children, onClose }: MobileMenuProps) => {
  // Fecha o menu ao clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      // Verifica se o clique foi fora do MobileMenu
      if (!target.closest('#mobileMenu')) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div id="mobileMenu" className="lg:hidden absolute top-20 inset-0 bg-white bg-opacity-95 z-50 flex flex-col items-center pt-6 h-fit">
      {children}
    </div>
  );
};
