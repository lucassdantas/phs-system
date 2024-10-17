import { Limiter } from '@/components/Limiter'
import { CiFacebook, CiMail } from 'react-icons/ci'
import { FaInstagram } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io5'
import { LuMapPin } from 'react-icons/lu'

export const SuperHeader = () => {
  return (
    <div className='bg-gray-200 hidden lg:block'>
      <Limiter className='px-0 lg:px-4'>
        <div className={'flex items-center justify-between w-full shadow-sm '}>
          <div className="flex flex-col">
            <ul className='flex gap-8 text-black' >
            </ul>
          </div>

          <div className="flex flex-col justify-center items-center align-middle py-4 ">
            <ul className='flex gap-2 text-black'>
            </ul>
          </div>
        </div>
      </Limiter>
    </div>
    
  )
}
