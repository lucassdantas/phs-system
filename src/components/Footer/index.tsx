import { Section } from '@/components/Section'
import { Link } from 'react-router-dom'

export const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className='bg-black text-center'>
      <Section className='text-white text-center font-bold pt-12'>
        <span><Link to='/politica-de-privacidade'>Política de privacidade</Link> | <Link to='/termos-de-uso'>Termos de uso</Link></span>
      </Section>
      <Section className='text-white text-center font-bold  pb-12'>
        <span>Desenvolvido por: Lucas Dantas | Design por: Natália Cerqueira</span>
      </Section>
    </footer>
  )
}
