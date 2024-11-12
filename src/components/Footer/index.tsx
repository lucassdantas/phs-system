import { Section } from '@/components/Section'
import { Link } from 'react-router-dom'
import logo from '@/assets/images/logo-phs-system-fonte-branca.png'

export const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className='bg-dark-blue-phs-system  text-white text-center'>
      <Section className='text-center pt-12 pb-4 text-sm'>
        <div className='flex lg:flex-row flex-col items-center gap-4 mb-4'>
          <div className='lg:w-2/6 w-full flex items-center justify-center'>
            <Link to='/'><img src={logo} alt='Logotipo PHS System' className='max-w-[150px]'/></Link>
          </div>
          <div className='lg:w-3/6 w-full'>
            <span>Copyright © {currentYear} PHS System. Todos os direitos reservados.</span>
          </div>
          <div className='lg:w-2/6 w-full'>
            <span><Link to='/politica-de-privacidade'>Política de privacidade</Link> <span className='text-xs text-light-blue-phs-system'>|</span> <Link to='/termos-de-uso'>Termos de uso</Link></span>
          </div>
        </div>
        <div className='w-full text-center mt-12'>
          <span>Desenvolvido por: Lucas Dantas <span className='text-xs text-light-blue-phs-system'>|</span> Design por: Natália Cerqueira</span>
        </div>
      </Section>
    </footer>
  )
}
