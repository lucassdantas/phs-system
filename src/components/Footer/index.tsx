import { Section } from '@/components/Section'
import logoTipo from '@/assets/logo-corpore.png'
import Image from 'next/image'
import React from 'react'
import { Button } from '@/components/common/Button'
import { address, phoneNumber, socialMedia, whatsApp, workingTime } from '@/utils/informations/contact-info'
import Link from 'next/link'
import {  FaFacebook, FaInstagram, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'
import { BiPhone } from 'react-icons/bi'

export const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className='text-white'>
      <Section className='bg-dark-blue-corpore pt-24 pb-12'>
        <div className='flex lg:flex-row flex-col text-lg lg:gap-4 gap-12 '>

          <div className="lg:w-2/4 w-full flex flex-col items-tart gap-4 lg:pr-[15%]">
            <div className='bg-white rounded-xl flex justify-center shadow-lg p-4 max-w-[420px]'>
              <Image src={logoTipo} alt='Logotipo' className='max-w-[220px]'/>
            </div>
          </div>

          <div className='lg:w-1/3 w-full flex flex-col items-start gap-4'>
            <h4 className='text-2xl font-bold'>Funcionamento</h4>
            <ul>
              <li>{workingTime.weekDays}</li>
              <li>{workingTime.saturday}</li>
              <li>{workingTime.sunday}</li>
            </ul>
            <Button/>
          </div>

          <div className="lg:w-1/3 w-full flex flex-col items-start gap-4">
            <h4 className='text-2xl font-bold'>Contatos</h4>
            <ul className='w-full max-w-[325px]'>
              <li className='flex gap-4 items-center hover:scale-110 transition '><FaMapMarkerAlt  /><a href={address.url} target='_blank' className='leading-4'>{address.info}</a></li>
              <li className='flex gap-4 items-center hover:scale-110 transition '><BiPhone/><a href={phoneNumber.phone02.url} target='_blank'>{phoneNumber.phone02.info}</a></li>
              <li className='flex gap-4 items-center hover:scale-110 transition '><BiPhone/><a href={phoneNumber.phone01.url} target='_blank'>{phoneNumber.phone01.info}</a></li>
              <li className='flex gap-4 items-center hover:scale-110 transition '><FaWhatsapp/> <a href={whatsApp.url} target='_blank'>{whatsApp.info}</a></li>
            </ul>
            <Link href={'/politica-de-privacidade'}>Política de privacidade</Link>
          </div>

        </div>
      </Section>

      <Section className='bg-dark-blue-corpore'>
        <div className='text-center text-white text-lg border-t border-t-gray-300 py-4 flex lg:flex-row flex-col gap-4 justify-between items-center'>
          <span>© Copyright {currentYear} Corporetorre | Site desenvolvido por <a href='https://www.linkedin.com/in/lucas-de-sousa-dantas/' rel='external' target='_blank' className='font-bold'>Lucas Dantas.</a></span>
          <div className='flex gap-4 items-center'>
            <a href={socialMedia.facebook.url}  target='_blank' className='hover:scale-110 transition'><FaFacebook   className='text-xl' /></a>
            <a href={socialMedia.instagram.url} target='_blank' className='hover:scale-110 transition'><FaInstagram className='text-xl'/></a>
          </div>
        </div>
      </Section>
    </footer>
  )
}
