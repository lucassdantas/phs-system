import { ColoredContainer } from '@/components/ColoredContainer'
import { Section } from '@/components/Section'
import { Template } from '@/components/Template'
import { AddVideoForm } from '@/pages/Admin/AddEntity/AddLesson/AddVideoForm'
import { ComplementarMaterialTable } from '@/pages/Admin/AddEntity/AddLesson/ComplementarMaterialTable'
import { LessonPhaseForm } from '@/pages/Admin/AddEntity/AddLesson/LessonPhaseForm'
import { NameAndDescriptionForm } from '@/pages/Admin/AddEntity/AddLesson/NameAndDescriptionForm'
import { RelatedInstructor } from '@/pages/Admin/AddEntity/AddLesson/RelatedInstructor'
import { ComplementarMaterialsType } from '@/types/complementarMaterialsType'
import { userImagesDirectory } from '@/utils/constants/siteInfos'
import { useState } from 'react'

export const AddLesson = () => {
  const [selectedPhase, setSelectedPhase] = useState("");
  const [lessonVideo, setLessonVideo] = useState<File | null>(null)
  const [complementarMaterials, setComplementarMaterials] = useState<ComplementarMaterialsType[]>([])
  const [lessonTitle, setLessonTitle] = useState("");
  const [lessonDescription, setLessonDescription] = useState("");
  const [relatedInstructor, setRelatedInstructor] = useState('Nome do instrutor')
  const navMenu = [
    { url: "#instrutor", content: "Instrutor" },
    { url: "#nome-e-descricao", content: "Nome e descrição" },
    { url: "#fase", content: "Fase" },
    { url: "#video-da-aula", content: "Vídeo da aula" },
    { url: "#materiais", content: "Materiais" }
  ];
  return (
    <Template pageTitle='Adicionar Aula' lastPage={{ title: 'Admin', route: 'admin' }}>
      <Section className='py-12'>
        <div className="flex gap-12">
          <div className='w-2/6'>
            {/* Adicionei um wrapper com altura total para garantir o sticky */}
            <div className='lg:pr-16 h-full'>
              <nav className='sticky top-12'>
                <ul className='border border-neutral-300 rounded-xl py-12 pl-0 space-y-4'>
                  {navMenu.map((item, index) => (
                    <li key={index} className='border-medium-blue-phs-system hover:border-medium-green-phs-system border-l-2 list-none pl-4'>
                      <a href={item.url}>{item.content}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
          <div className='w-5/6 space-y-5'>
            <h2 className='text-3xl font-bold'>Informações do curso</h2>
            <ColoredContainer>
              <RelatedInstructor relatedInstructor={relatedInstructor} setRelatedInstructor={setRelatedInstructor} />
            </ColoredContainer>

            <ColoredContainer cardTitle='Nome e descrição do curso'>
              <NameAndDescriptionForm
                lessonTitle={lessonTitle}
                lessonDescription={lessonDescription}
                setLessonTitle={setLessonTitle}
                setLessonDescription={setLessonDescription}
              />
            </ColoredContainer>

            <ColoredContainer cardTitle='Fase do curso'>
              <LessonPhaseForm selectedPhase={selectedPhase} setSelectedPhase={setSelectedPhase} />
            </ColoredContainer>

            <ColoredContainer cardTitle='Vídeo da aula'>
              <AddVideoForm lessonVideo={lessonVideo} setLessonVideo={setLessonVideo} />
            </ColoredContainer>

            <ColoredContainer cardTitle='Materiais complementares'>
              <ComplementarMaterialTable complementarMaterials={complementarMaterials} setComplementarMaterials={setComplementarMaterials} />
            </ColoredContainer>
          </div>
        </div>
      </Section>
    </Template>

  )
}
