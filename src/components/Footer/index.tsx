import { Section } from '@/components/Section'

export const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className='bg-black text-center'>
      <Section className='text-white text-center font-bold pt-12 pb-12'>
        <span>Desenvolvido por: Lucas Dantas | Design por: Natália Cerqueira</span>
      </Section>
    </footer>
  )
}
