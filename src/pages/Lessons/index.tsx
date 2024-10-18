import { Hero } from '@/components/Hero'
import { LessonsCard } from '@/components/LessonsCard'
import { Section } from '@/components/Section'
import { Template } from '@/components/Template'
import { LessonsType } from '@/types/lessons'
import { lessons } from '@/utils/lessons'

export const Lessons = () => {
  return (
    <Template pageTitle='Aulas'>
      <Hero pageTitle='Aulas'/>
      <Section>
        <div className='w-full flex justify-center items-center py-12'>
          {lessons.map((lesson:LessonsType, i:number) => <LessonsCard lesson={lesson} key={i}/>)}
        </div>
      </Section>
    </Template>
  )
}
