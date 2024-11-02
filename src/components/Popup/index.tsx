// src/components/Popup.tsx
import React from 'react';

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Popup = ({ isOpen, onClose, children }:PopupProps) => {
  if (!isOpen) return null;

  return (
    <div className='fixed top-0 inset-0 flex items-center justify-center'>
    <div className="fixed inset-0  bg-black bg-opacity-50" onClick={(onClose)}></div>
    <div className="bg-white p-8 rounded-lg lg:max-w-[50%] max-w-[90%] w-full relative z-10 overflow-y-scroll max-h-[88%]">
      {children}
      <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={onClose}>
        &times;
      </button>
    </div>
  </div>
  );
};

