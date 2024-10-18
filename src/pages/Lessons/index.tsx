import { Hero } from '@/components/Hero'
import { Section } from '@/components/Section'
import { Template } from '@/components/Template'
import React from 'react'

export const Lessons = () => {
  return (
    <Template pageTitle='Aulas'>
 
      <Hero pageTitle='Aulas'/>
      <Section>
        <div className='w-full flex justify-center items-center py-12'>
          Aulas
        </div>
      </Section>

    </Template>
  )
}
