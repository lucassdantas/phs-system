import { Section } from '@/components/Section'
import { Button } from '@/components/Button'
import {  FaFacebook, FaInstagram, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className='text-white'>
      <Section className='bg-dark-blue-corpore pt-24 pb-12'>
        <div className='flex lg:flex-row flex-col text-lg lg:gap-4 gap-12 '>

          <div className="lg:w-2/4 w-full flex flex-col items-tart gap-4 lg:pr-[15%]">
            <div className='bg-white rounded-xl flex justify-center shadow-lg p-4 max-w-[420px]'>
            </div>
          </div>

          <div className='lg:w-1/3 w-full flex flex-col items-start gap-4'>
            <h4 className='text-2xl font-bold'>Funcionamento</h4>
            <ul>
            </ul>
            <Button/>
          </div>

          <div className="lg:w-1/3 w-full flex flex-col items-start gap-4">
            <h4 className='text-2xl font-bold'>Contatos</h4>
            <ul className='w-full max-w-[325px]'>
            </ul>
            <Link to={'/politica-de-privacidade'}>Política de privacidade</Link>
          </div>

        </div>
      </Section>

      <Section className='bg-dark-blue-corpore'>
        <div className='text-center text-white text-lg border-t border-t-gray-300 py-4 flex lg:flex-row flex-col gap-4 justify-between items-center'>
          <span>© Copyright {currentYear} Corporetorre | Site desenvolvido por <a href='https://www.linkedin.com/in/lucas-de-sousa-dantas/' rel='external' target='_blank' className='font-bold'>Lucas Dantas.</a></span>
          <div className='flex gap-4 items-center'>
          </div>
        </div>
      </Section>
    </footer>
  )
}
