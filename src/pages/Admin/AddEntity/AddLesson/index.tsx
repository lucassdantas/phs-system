import { ColoredContainer } from '@/components/ColoredContainer'
import { Section } from '@/components/Section'
import { Template } from '@/components/Template'
import { AddVideoForm } from '@/pages/Admin/AddEntity/AddLesson/AddVideoForm'
import { ComplementarMaterialTable } from '@/pages/Admin/AddEntity/AddLesson/ComplementarMaterialTable'
import { LessonPhaseForm } from '@/pages/Admin/AddEntity/AddLesson/LessonPhaseForm'
import { NameAndDescriptionForm } from '@/pages/Admin/AddEntity/AddLesson/NameAndDescriptionForm'
import { userImagesDirectory } from '@/utils/constants/siteInfos'
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
    <Template pageTitle='Adicionar Aula' lastPage={{title:'Admin', route:'admin'}}>
      <Section className='py-12'>
        <div className="flex gap-12">
          <div className='w-2/6'>
            <nav className='lg:pr-16'>
              <ul className='border border-neutral-300 rounded-xl py-12 pl-0 space-y-4 sticky'>
                {navMenu.map((item, index) => (
                  <li key={index} className='border-medium-blue-phs-system hover:border-medium-green-phs-system border-l-2 list-none pl-4'>
                    <a href={item.url}>{item.content}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className='w-5/6 space-y-5'>
            <h2 className='text-3xl font-bold'>Informações do curso</h2>
            <ColoredContainer>
              <div className="flex gap-12">
                <div className='w-2/6'>
                  <img src={userImagesDirectory+'default-image/placeholder-image.jpg'} alt='Foto de perfil do usuário' className='rounded-full w-full h-auto object-cover aspect-square' />
                </div>
                <div className='w-5/6 space-y-5'>
                  <ColoredContainer>
                    <h3>Nome do instrutor</h3>
                    <p>Descrição do instrutor</p>
                  </ColoredContainer>
                </div>
              </div>
            </ColoredContainer>

            <ColoredContainer cardTitle='Nome e descrição do curso'>
              <NameAndDescriptionForm/>
            </ColoredContainer>

            <ColoredContainer cardTitle='Fase do curso'>
              <LessonPhaseForm/>
            </ColoredContainer>

            <ColoredContainer cardTitle='Vídeo da aula'>
              <AddVideoForm/>
            </ColoredContainer>

            <ColoredContainer cardTitle='Materiais complementares'>
              <ComplementarMaterialTable/>
            </ColoredContainer>
          </div>
        </div>
      </Section>
    </Template>
  )
}
