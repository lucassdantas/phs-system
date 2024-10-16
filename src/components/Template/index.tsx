import React, { ReactNode } from 'react'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { FloatWppButton } from '@/components/FloatWppButton'

type TemplateProps = {
  children:ReactNode;
  pageTitle:string;
  transparentHeader?:boolean;
}
export const Template = ({children, pageTitle, transparentHeader=false}:TemplateProps) => {
  return (
    <>
      <Header isTransparentHeader={transparentHeader}/>
      <main className='flex flex-col items-center'>
        {children}
        <FloatWppButton/>
      </main>
      <Footer/>
    </>
  )
}
