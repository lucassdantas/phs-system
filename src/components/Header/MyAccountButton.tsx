import { useAuth } from '@/hooks/UseAuth';
import React from 'react'

export const LoginAndRegisterButtons = () => {
  const { user, logout } = useAuth();

  if(user) return(
    <div onClick={() => logout()} className='cursor-pointer'>
      <span>Sair</span>
    </div>
  )
  return (
    <div className="flex lg:flex-row flex-col items-center lg:space-x-4 lg:space-y-0 space-y-4">
      <button className="px-4 py-2 text-light-blue-phs-system border border-light-blue-phs-system rounded-full hover:bg-blue-100">
        Login
      </button>
      <button className="px-4 py-2 text-white bg-dark-blue-phs-system rounded-full hover:bg-light-blue-phs-system">
        Cadastrar-se
      </button>
    </div>
  )
}
