import { ColoredContainer } from '@/components/ColoredContainer'
import { Section } from '@/components/Section'
import { Template } from '@/components/Template'
import React from 'react'

export const AddLesson = () => {
  const navMenu = [
    { url: "#instrutor", content: "Instrutor" },
    { url: "#nome-e-descricao", content: "Nome e descrição" },
    { url: "#fase", content: "Fase" },
    { url: "#video-da-aula", content: "Vídeo da aula" },
    { url: "#materiais", content: "Materiais" }
  ];
  return (
    <Template pageTitle='Adicionar Aula'>
      <Section className='py-12'>
        <div className="flex gap-12">
          <div className='w-2/6'>
            <nav className='border border-neutral-400 rounded-xl p-4 pl-0 space-y-4 sticky'>
              {navMenu.map((item, index) => (
                <li key={index} className='border-medium-blue-phs-system border-l-2 list-none pl-4'>
                  <a href={item.url}>{item.content}</a>
                </li>
              ))}
            </nav>
          </div>
          <div className='w-5/6 space-y-5'>
            <h2 className='text-3xl font-bold'>Informações do curso</h2>
            <ColoredContainer cardTitle='Instrutor'>
              a
            </ColoredContainer>

            <ColoredContainer cardTitle='Nome e descrição do curso'>
              a
            </ColoredContainer>

            <ColoredContainer cardTitle='Fase do curso'>
              a
            </ColoredContainer>

            <ColoredContainer cardTitle='Vídeo da aula'>
              a
            </ColoredContainer>

            <ColoredContainer cardTitle='Materiais complementares'>
              a
            </ColoredContainer>
          </div>
        </div>
      </Section>
    </Template>
  )
}
