import { Limiter } from '@/components/Limiter'
import { address, email, socialMedia, whatsApp } from '@/utils/informations/contact-info'
import { maxWidth } from '@/utils/max-width'
import React from 'react'
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
              <li className='hover:scale-110 transition' ><a href={address.url} target='_blank' className='flex gap-2 items-center'><LuMapPin />Av. Dom Hélder Câmara, 5200 – salas 512/513 – Cachambi</a></li>
              <li className='hover:scale-110 transition' ><a href={email.url} target='_blank' className='flex gap-2 items-center'><CiMail />{email.info}</a></li>
              <li className='hover:scale-110 transition' ><a href={whatsApp.url} target='_blank' className='flex gap-2 items-center'><IoLogoWhatsapp />{whatsApp.info}</a></li>
            </ul>
          </div>

          <div className="flex flex-col justify-center items-center align-middle py-4 ">
            <ul className='flex gap-2 text-black'>
              <li className='hover:scale-110 transition'><a href={socialMedia.facebook.url}  target='_blank'><CiFacebook   className='text-xl' /></a></li>
              <li className='hover:scale-110 transition'><a href={socialMedia.instagram.url} target='_blank'><FaInstagram className='text-xl'/></a></li>
            </ul>
          </div>
        </div>
      </Limiter>
    </div>
    
  )
}
