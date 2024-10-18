import React, { ReactNode } from 'react'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { CookieBar } from '@/components/CookieBar';

type TemplateProps = {
  children:ReactNode;
  pageTitle:string;
  transparentHeader?:boolean;
}
export const Template = ({children, pageTitle, transparentHeader=false}:TemplateProps) => {
  return (
    <>
      <Header />
      <main className=''>
        {children}
        <CookieBar/>
      </main>
      <Footer/>
    </>
  )
}
