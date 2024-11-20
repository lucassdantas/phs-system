import { ReactNode } from 'react'
import { Hero } from '@/components/Hero';
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { CookieBar } from '@/components/CookieBar';

type TemplateProps = {
  children:ReactNode;
  pageTitle:string;
  hasBanner?:boolean;
  lastPage?:{title:string;route:string;};
}

export const Template = ({children, pageTitle, hasBanner = true, lastPage={title:'Home', route:'/'}}:TemplateProps) => {
  return (
    <>
      <Header />
      <main>
        {hasBanner && <Hero pageTitle={pageTitle} lastPage={lastPage}/>}
        {children}
        <CookieBar/>
      </main>
      <Footer/>
    </>
  )
}
