import React, { ReactNode } from 'react'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { CookieBar } from '@/components/CookieBar';
import { Hero } from '@/components/Hero';

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
