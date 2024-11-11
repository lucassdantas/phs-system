import { ReactNode } from 'react'
import { Hero } from '@/components/Hero';
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { CookieBar } from '@/components/CookieBar';

type TemplateProps = {
  children:ReactNode;
  pageTitle:string;
  hasBanner?:boolean;
}

export const Template = ({children, pageTitle, hasBanner = true}:TemplateProps) => {
  return (
    <>
      <Header />
      <main>
        {hasBanner && <Hero pageTitle={pageTitle}/>}
        {children}
        <CookieBar/>
      </main>
      <Footer/>
    </>
  )
}
